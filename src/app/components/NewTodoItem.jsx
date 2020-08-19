import React from "react"

const NewTodoItem = ({placeholder = ""}) => {
  return (
    <div className="add-items d-flex">
      {" "}
      <input
        type="text"
        className="form-control todo-list-input"
        placeholder={placeholder}
      />{" "}
      <button className="add btn btn-primary font-weight-bold todo-list-add-btn">
        Add
      </button>{" "}
    </div>
  )
}

export default NewTodoItem
