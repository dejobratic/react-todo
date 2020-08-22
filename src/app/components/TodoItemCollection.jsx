import React from "react"
import { ListGroup } from "react-bootstrap"

import TodoItem from "app/components/TodoItem"

const TodoItemCollection = ({ todoItems = [] }) => {
  return (
    <ListGroup variant="flush">
      {todoItems
        .map((todoItem) => <TodoItem key={todoItem.id} todoItem={todoItem} />)
        .reverse()}
    </ListGroup>
  )
}

export default TodoItemCollection
