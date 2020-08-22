import React, { useContext } from "react"
import { Container } from "react-bootstrap"

import ToastCollection from "app/components/ToastCollection"
import TodoList from "app/views/TodoList"

import { ToastContext } from "app/common/ToastContext"

const App = () => {
  const { toasts } = useContext(ToastContext)

  return (
    <>
      <ToastCollection toasts={toasts} />
      <Container>
        <TodoList />
      </Container>
    </>
  )
}

export default App
