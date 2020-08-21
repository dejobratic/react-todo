import React, { useEffect, useReducer } from "react"
import TodoList from "../components/TodoList"
import NewTodoItem from "../components/NewTodoItem"
import { todoItemService } from "../services/TodoItemService"
import { GET_ALL, TodoItemsReducer } from "../common/TodoItemsReducer"

const TodoHomePage = () => {
  const [todoItems, dispatch] = useReducer(TodoItemsReducer, [])

  useEffect(() => {
    const fetchTodoItems = async () => {
      const todoItems = await todoItemService.getAll()
      dispatch({ type: GET_ALL, payload: todoItems })
    }

    fetchTodoItems()
  }, [])

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
