import React from "react"

const TodoItem = ({ todoItem = {} }) => {
  
  const itemClass = todoItem.isCompleted ? { className: "completed" } : {}
  const isDefaultChecked = todoItem.isCompleted ? { defaultChecked: true } : {}

  return (
    <li {...itemClass}>
      <div className="form-check">
        <label className="form-check-label">
          <input className="checkbox" type="checkbox" {...isDefaultChecked} />
          {todoItem.title}
          <i className="input-helper"></i>
        </label>
      </div>
      <i className="remove mdi mdi-close-circle-outline"></i>
    </li>
  )
}

export default TodoItem
