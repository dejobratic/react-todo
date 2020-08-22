import React, { useState, useContext } from "react"

import { TodoItemContext } from "app/common/TodoItemContext"
import { ADD_TODO_ITEM } from "app/common/TodoItemReducer"

import { ToastContext } from "app/common/ToastContext"
import { ADD_TOAST } from "app/common/ToastReducer"

import TodoItem from "app/models/TodoItem"
import { Button, InputGroup, FormControl } from "react-bootstrap"
import Toast from "app/models/Toast"

const NewTodoItem = ({ placeholder = "" }) => {
  const defaultTodoItemTitle = ""
  const [todoItemTitle, setTodoItemTitle] = useState(defaultTodoItemTitle)
  const { dispatchTodoItems } = useContext(TodoItemContext)

  const { dispatchToast } = useContext(ToastContext)

  const handleTodoItemTitleChange = (event) => {
    setTodoItemTitle(event.target.value)
  }

  const handleAddTodoItem = () => {
    const isValidTodoItemTitle = () => {
      const titleRegex = /^\s*$/
      return titleRegex.exec(todoItemTitle) === null
    }

    if (isValidTodoItemTitle()) {
      dispatchTodoItems({
        type: ADD_TODO_ITEM,
        payload: new TodoItem(todoItemTitle, false, 1),
      })
      setTodoItemTitle(defaultTodoItemTitle)

      dispatchToast({
        type: ADD_TOAST,
        payload: new Toast("Success", "Added new todo item."),
      })
    }
  }

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder={placeholder}
        aria-label={placeholder}
        aria-describedby="basic-addon2"
        value={todoItemTitle}
        onChange={handleTodoItemTitleChange}
      />
      <InputGroup.Append>
        <Button variant="outline-primary" onClick={handleAddTodoItem}>
          Add
        </Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default NewTodoItem
