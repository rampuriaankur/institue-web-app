import React, { useState, useEffect } from "react";
import TextInput from "./common/TextInput";
import { Link } from "react-router-dom";
import { getAuthors } from "../api/authorApi";

function CourseForm(props) {
  const [authors, setAuthor] = useState([]);
  //state = { courses: [] };

  useEffect(() => {
    getAuthors().then(author => {
      setAuthor(author);
    });
  }, [props]);

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
            <option value="" defaultValue>
              select
            </option>
            />
            {authors.map((author, id) => (
              <option value={author.id}> {author.authorName}</option>
            ))}
          </select>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
      </div>
      <TextInput
        id="categoryName"
        name="categoryName"
        label="Category"
        onChange={props.onchange}
        value={props.course.categoryName}
        error={props.errors.categoryName}
      />
      <input
        id="categoryId"
        type="hidden"
        name="categoryId"
        className="form-control"
        value={props.course.categoryId}
      />
      <input type="submit" value={props.action} className="btn btn-primary" />{" "}
      <Link to="/courses" onClick="" className="btn btn-secondary">
        Cancel
      </Link>
    </form>
  );
}

export default CourseForm;
