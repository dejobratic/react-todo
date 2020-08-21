import React, { useContext } from "react"

import TodoList from "app/components/TodoList"
import NewTodoItem from "app/components/NewTodoItem"

import { TodoItemsContext } from "app/common/TodoItemsContext"

const TodoHomePage = () => {
  const { todoItems } = useContext(TodoItemsContext)

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-lg-12">
            <div className="card px-3">
              <div className="card-body">
                <h4 className="card-title">Awesome Todo list</h4>
                <NewTodoItem placeholder="What do you need to do today?" />
                <TodoList todoItems={todoItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoHomePage
