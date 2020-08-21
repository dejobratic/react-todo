import React from "react"

import TodoHomePage from "./views/TodoHomePage"
import { TodoItemsProvider } from "./common/TodoItemsContext"

import "./App.css"

function App() {
  return (
    <div className="App">
      <TodoItemsProvider>
        <TodoHomePage />
      </TodoItemsProvider>
    </div>
  )
}

export default App
