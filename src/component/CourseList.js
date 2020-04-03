import React from "react";
import { Link } from "react-router-dom";
function CourseList(props) {
  function deleteCourse(e) {
    props.deleteCourseByid(e.target.value);
  }

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Course title</th>
          <th>Author Name</th>
          <th>Category Name</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.course.map(course => {
          return (
            <tr key={course.id}>
              <td>
                <Link to={"/course/" + course.id}>{course.title}</Link>{" "}
              </td>
              <td>{course.authorName}</td>
              <td>{course.categoryName}</td>
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
