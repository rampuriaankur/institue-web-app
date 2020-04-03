import React, { useState, useEffect } from "react";
import TextInput from "./common/TextInput";
import { Link } from "react-router-dom";
import { getAuthors } from "../api/authorApi";
import { getCategories } from "../api/CategoryApi";

function CourseForm(props) {
  const [authors, setAuthor] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getAuthors().then(author => {
      setAuthor(author);
    });
    getCategories().then(_category => {
      setCategory(_category);
    });
  }, [props.author, props.category]);

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
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="field">
          <select
            id="categoryId"
            name="categoryId"
            onChange={props.onchange}
            value={props.course.categoryId}
            className="form-control"
          >
            <option value="" defaultValue>
              select
            </option>
            />
            {category.map((category, id) => (
              <option value={category.id}>{category.categoryName}</option>
            ))}
          </select>
        </div>
        {props.errors.categoryId && (
          <div className="alert alert-danger">{props.errors.categoryId}</div>
        )}
      </div>
      <input type="submit" value={props.action} className="btn btn-primary" />{" "}
      <Link to="/courses" onClick="" className="btn btn-secondary">
        Cancel
      </Link>
    </form>
  );
}

export default CourseForm;
