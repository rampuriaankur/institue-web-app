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
    <div className="container">
      {" "}
      <div className="jumbotron" style={{ backgroundColor: "#5bc0de " }}>
        <span class="font-weight-bold text-center">
          <h2> Courses Details</h2>
        </span>
      </div>
      <div className="dataTables_wrapper dt-bootstrap">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Link to="course" className="btn btn-primary">
              <span className=""> Add Course </span>
            </Link>
          </div>
        </div>
        <div>
          <CourseList course={course} deleteCourseByid={deleteCourseByid} />
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
