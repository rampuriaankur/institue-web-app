import React, { useState, useEffect } from "react";
import { getCourses, deleteCourse } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

function CoursePage(props) {
  const [course, setCourse] = useState([]);

  //state = { courses: [] };

  useEffect(() => {
    getCourses().then(courses => setCourse(courses));
  }, [props]);

  function deleteCourseByid(id) {
    deleteCourse(id).then(props.history.push("/courses"));
  }

  return (
    <>
      <h2> Courses Page </h2>
      <Link to="course" className="btn btn-primary">
        Add Course
      </Link>{" "}
      <CourseList course={course} deleteCourseByid={deleteCourseByid} />
    </>
  );
}

export default CoursePage;
