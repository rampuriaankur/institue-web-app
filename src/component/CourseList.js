import React from "react";
import { Link } from "react-router-dom";
function CourseList(props) {
  function deleteCourse(e) {
    props.deleteCourseByid(e.target.value);
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Course title</th>
          <th>Author ID</th>
          <th>Category</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.course.map(course => {
          return (
            <tr key={course.id}>
              <td>
                <Link to={"/course/" + course.slug}>{course.title}</Link>{" "}
              </td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
              <td>
                <button onClick={deleteCourse} value={course.id}>
                  Delete Course
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CourseList;
