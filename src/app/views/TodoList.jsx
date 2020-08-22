import React, { useContext } from "react"
import { Navbar, Form } from "react-bootstrap"

import TodoItemCollection from "app/components/TodoItemCollection"
import NewTodoItem from "app/components/NewTodoItem"

import {
  TodoItemsContext,
  TodoItemsProvider,
} from "app/common/TodoItemsContext"

const MyTodoList = () => {
  const { todoItems } = useContext(TodoItemsContext)

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>React Todo</Form.Label>
          <NewTodoItem placeholder="What do you need to do today?" />
        </Form.Group>
      </Form>
      <TodoItemCollection todoItems={todoItems} />
    </>
  )
}

const TodoList = () => {
  return (
    <>
      <TodoItemsProvider>
        <MyTodoList />
      </TodoItemsProvider>
    </>
  )
}

export default TodoList
