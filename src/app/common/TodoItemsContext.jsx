import React, { useReducer, useEffect, createContext } from "react"

import { todoItemService } from "app/services/TodoItemService"
import { GET_ALL, todoItemsReducer } from "app/common/TodoItemsReducer"

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
