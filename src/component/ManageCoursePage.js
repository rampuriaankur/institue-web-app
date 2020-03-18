import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import * as CourseAPI from "../api/courseApi";

function ManageCoursePage(props) {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: "",
    category: ""
  });

  useEffect(() => {
    const slug = props.match.params.slug;
    if (slug) {
      CourseAPI.getCourseBySlug(slug).then(_course => setCourse(_course));
    }
  }, [props.match.params.slug]);

  function isFormValid(event) {
    debugger;
    const _errors = {};
    if (!event.target.title.value) _errors.title = "Title is required";
    if (!event.target.authorId.value)
      _errors.authorId = "Author Id is required";
    if (!event.target.category.value) _errors.category = "Category is required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function onChange(event) {
    const updateCourse = { ...course, [event.target.name]: event.target.value };
    setCourse(updateCourse);
  }

  function onSubmit(event) {
    event.preventDefault();
    debugger;
    if (!isFormValid(event)) {
      return;
    }

    CourseAPI.saveCourse(course).then(() => {
      //alert("Course Added!!")
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
      />
    </>
  );
}

export default ManageCoursePage;
