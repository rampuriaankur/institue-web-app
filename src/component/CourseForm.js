import React from "react";
import TextInput from "./common/TextInput";
import { Link } from "react-router-dom";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        name="title"
        label="Title"
        onChange={props.onchange}
        value={props.course.title}
        error={props.errors.title}
      />
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onchange}
            value={props.course.authorId}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
      </div>
      <TextInput
        id="category"
        name="category"
        label="Category"
        onChange={props.onchange}
        value={props.course.category}
        error={props.errors.category}
      />
      <input type="submit" value="Save" className="btn btn-primary" />{" "}
      <Link to="/courses" onClick="" className="btn btn-secondary">
        Cancel
      </Link>
    </form>
  );
}

export default CourseForm;
