import React, { useReducer, useEffect, createContext } from "react"

import { todoItemService } from "app/services/TodoItemService"
import { GET_TODO_ITEMS, todoItemReducer } from "app/common/TodoItemReducer"

const TodoItemContext = createContext({})

const TodoItemProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, [])

  useEffect(() => {
    ;(async () => {
      const todoItems = await todoItemService.getAll()
      dispatchTodoItems({ type: GET_TODO_ITEMS, payload: todoItems })
    })()
  }, [])

  return (
    <TodoItemContext.Provider value={{ todoItems, dispatchTodoItems }}>
      {children}
    </TodoItemContext.Provider>
  )
}

export { TodoItemContext, TodoItemProvider }
