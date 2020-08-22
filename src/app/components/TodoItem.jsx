import React, { useContext } from "react"
import { ListGroup, Button, Form, Col } from "react-bootstrap"

import { TodoItemContext } from "app/common/TodoItemContext"
import {
  REMOVE_TODO_ITEM,
  CHANGE_TODO_ITEM_STATUS,
} from "app/common/TodoItemReducer"

import { ToastContext } from "app/common/ToastContext"
import { ADD_TOAST } from "app/common/ToastReducer"

import Toast from "app/models/Toast"

const TodoItem = ({ todoItem = {} }) => {
  const { dispatchTodoItems } = useContext(TodoItemContext)
  const { dispatchToast } = useContext(ToastContext)

  const handleChangeTodoItemStatus = (todoItemId) => {
    dispatchTodoItems({ type: CHANGE_TODO_ITEM_STATUS, payload: todoItemId })
  }

  const handleRemoveTodoItem = (todoItemId) => {
    dispatchTodoItems({ type: REMOVE_TODO_ITEM, payload: todoItemId })
    dispatchToast({type: ADD_TOAST, payload: new Toast("Success", "Removed todo item.")})
  }

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

  const todoItemTitle = todoItem.isCompleted ? (
    <CompletedTodoItemTitle value={todoItem.title} />
  ) : (
    <UncompletedTodoItemTitle value={todoItem.title} />
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
