import React, { useContext } from "react"
import { ListGroup, Button, Form, Col } from "react-bootstrap"

import { TodoItemsContext } from "app/common/TodoItemsContext"
import { REMOVE, CHANGE_STATUS } from "app/common/TodoItemsReducer"

const CompletedTodoItemTitle = ({ value }) => {
  return (
    <Form.Label className="text-muted">
      <del>{value}</del>
    </Form.Label>
  )
}

const UncompletedTodoItemTitle = ({ value }) => {
  return <Form.Label>{value}</Form.Label>
}

const TodoItem = ({ todoItem = {} }) => {
  const { dispatchTodoItems } = useContext(TodoItemsContext)

  const handleChangeTodoItemStatus = (todoItemId) => {
    dispatchTodoItems({ type: CHANGE_STATUS, payload: todoItemId })
  }

  const handleRemoveTodoItem = (todoItemId) => {
    dispatchTodoItems({ type: REMOVE, payload: todoItemId })
  }

  const todoItemTitle = todoItem.isCompleted ? (
    <CompletedTodoItemTitle value={todoItem.title} />
  ) : (
    <UncompletedTodoItemTitle value={todoItem.title}/>
  )

  return (
    <ListGroup.Item onClick={() => handleChangeTodoItemStatus(todoItem.id)}>
      <Form.Group>
        <Form.Row>
          <Col xs={11}>{todoItemTitle}</Col>
          <Col xs={1}>
            <Button
              size="sm"
              variant="outline-danger"
              onClick={() => handleRemoveTodoItem(todoItem.id)}
            >
              Remove
            </Button>
          </Col>
        </Form.Row>
      </Form.Group>
    </ListGroup.Item>
  )
}

export default TodoItem
