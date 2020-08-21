import React from "react"
import TodoItem from "app/components/TodoItem"

const TodoList = ({ todoItems = [] }) => {
  return (
    <div className="list-wrapper">
      <ul className="d-flex flex-column-reverse todo-list">
        {todoItems.map((todoItem) => (
          <TodoItem key={todoItem.id} todoItem={todoItem} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
