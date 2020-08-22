import React, { useContext } from "react"
import { Form } from "react-bootstrap"

import TodoItemCollection from "app/components/TodoItemCollection"
import NewTodoItem from "app/components/NewTodoItem"

import { TodoItemContext, TodoItemProvider } from "app/common/TodoItemContext"

const MyTodoList = () => {
  const { todoItems } = useContext(TodoItemContext)

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
      <TodoItemProvider>
        <MyTodoList />
      </TodoItemProvider>
    </>
  )
}

export default TodoList
