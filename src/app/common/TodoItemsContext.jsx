import React, { useReducer, useEffect, createContext } from "react"
import { todoItemService } from "../services/TodoItemService"
import { GET_ALL, todoItemsReducer } from "./TodoItemsReducer"

const TodoItemsContext = createContext({})

const TodoItemsProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, [])

  useEffect(() => {
    ;(async () => {
      const todoItems = await todoItemService.getAll()
      dispatchTodoItems({ type: GET_ALL, payload: todoItems })
    })()
  }, [])

  return (
    <TodoItemsContext.Provider value={{ todoItems, dispatchTodoItems }}>
      {children}
    </TodoItemsContext.Provider>
  )
}

export { TodoItemsContext, TodoItemsProvider }
