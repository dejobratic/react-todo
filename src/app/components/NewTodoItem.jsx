import React, { useState, useContext } from "react"
import { TodoItemsContext } from "../common/TodoItemsContext"
import { ADD } from "../common/TodoItemsReducer"
import TodoItem from "../models/TodoItem"

const NewTodoItem = ({ placeholder = "" }) => {
  const defaultTodoItemTitle = ""
  const [todoItemTitle, setTodoItemTitle] = useState(defaultTodoItemTitle)
  const { dispatchTodoItems } = useContext(TodoItemsContext)

  const createNewTodoItem = () => {
    // generate mock id
    const generateId = () => {
      const min = 12234
      const max = 43112
      return Math.random() * (max - min) + min
    }

    return new TodoItem(generateId(), todoItemTitle, false, generateId())
  }

  const handleTodoItemTitleChange = (event) => {
    event.preventDefault()
    setTodoItemTitle(event.target.value)
  }

  const handleAddTodoItem = () => {
    const isValidTodoItemTitle = () => {
      const titleRegex = /^\s*$/
      return titleRegex.exec(todoItemTitle) === null
    }

    if (isValidTodoItemTitle()) {
      dispatchTodoItems({ type: ADD, payload: createNewTodoItem() })
      setTodoItemTitle(defaultTodoItemTitle)
    }
  }

  return (
    <div className="add-items d-flex">
      <input
        type="text"
        className="form-control todo-list-input"
        placeholder={placeholder}
        value={todoItemTitle}
        onChange={handleTodoItemTitleChange}
      />
      <button
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
        onClick={handleAddTodoItem}
      >
        Add
      </button>
    </div>
  )
}

export default NewTodoItem
