import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import * as CourseAPI from "../api/courseApi";

function ManageCoursePage(props) {
  const [errors, setErrors] = useState({});
  const [action, setAction] = useState("save");

  const [author, setAuthor] = useState({
    id: null,
    authorName: ""
  });

  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: "",
    authorName: "",
    categoryId: "",
    categoryName: ""
  });

  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
      CourseAPI.getCourseByCourseId(id).then(_course => {
        setCourse(_course);
        const _action = "update";
        setAction(_action);
      });
    }
  }, [props.match.params.id]);

  function isFormValid(event) {
    const _errors = {};
    if (!event.target.title.value) _errors.title = "Title is required";
    if (!event.target.authorId.value)
      _errors.authorId = "Author Id is required";
    if (!event.target.categoryName.value)
      _errors.categoryName = "Category is required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function onChange(event) {
    const updateCourse = { ...course, [event.target.name]: event.target.value };
    setCourse(updateCourse);
  }

  function onSubmit(event) {
    debugger;
    event.preventDefault();
    if (!isFormValid(event)) {
      return;
    }

    CourseAPI.saveCourse(course).then(() => {
      props.history.push("/courses");
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        onchange={onChange}
        course={course}
        onSubmit={onSubmit}
        errors={errors}
        action={action}
      />
    </>
  );
}

export default ManageCoursePage;
