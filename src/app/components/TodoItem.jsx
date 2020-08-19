import React from "react"

const TodoItem = ({ todoItem = {} }) => {
  const itemClass = todoItem.isCompleted ? "completed" : ""

  return (
    <li className={itemClass}>
      <div className="form-check">
        <label className="form-check-label">
          <input className="checkbox" type="checkbox" />
          {todoItem.title}
          <i className="input-helper"></i>
        </label>
      </div>
      <i className="remove mdi mdi-close-circle-outline"></i>
    </li>
  )
}

export default TodoItem
