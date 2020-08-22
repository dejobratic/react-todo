import React, { useState, useContext } from "react"

import { TodoItemsContext } from "app/common/TodoItemsContext"
import { ADD } from "app/common/TodoItemsReducer"

import TodoItem from "app/models/TodoItem"
import { Button, InputGroup, FormControl } from "react-bootstrap"

const NewTodoItem = ({ placeholder = "" }) => {
  const defaultTodoItemTitle = ""
  const [todoItemTitle, setTodoItemTitle] = useState(defaultTodoItemTitle)
  const { dispatchTodoItems } = useContext(TodoItemsContext)

  const createNewTodoItem = () => {
    // generate mock id
    const generateId = () => {
      const min = 12234
      const max = 43112

      return Math.floor(Math.random() * max) + min
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
