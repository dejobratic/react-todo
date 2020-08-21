import React, { useContext } from "react"

import { TodoItemsContext } from "app/common/TodoItemsContext"
import { REMOVE, CHANGE_STATUS } from "app/common/TodoItemsReducer"

const TodoItem = ({ todoItem = {} }) => {
  const { dispatchTodoItems } = useContext(TodoItemsContext)

  const handleChangeTodoItemStatus = (todoItemId) => {
    dispatchTodoItems({ type: CHANGE_STATUS, payload: todoItemId })
  }

  const handleRemoveTodoItem = (todoItemId) => {
    dispatchTodoItems({ type: REMOVE, payload: todoItemId })
  }

  const itemClass = todoItem.isCompleted ? { className: "completed" } : {}
  const isDefaultChecked = todoItem.isCompleted ? { defaultChecked: true } : {}

  return (
    <li {...itemClass}>
      <div className="form-check">
        <label className="form-check-label">
          <input
            className="checkbox"
            type="checkbox"
            {...isDefaultChecked}
            onClick={() => handleChangeTodoItemStatus(todoItem.id)}
          />
          {todoItem.title}
          <i className="input-helper"></i>
        </label>
      </div>
      <i
        className="remove mdi mdi-close-circle-outline"
        onClick={() => handleRemoveTodoItem(todoItem.id)}
      ></i>
    </li>
  )
}

export default TodoItem
