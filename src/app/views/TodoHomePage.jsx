import React, { useEffect, useReducer } from "react"
import TodoList from "../components/TodoList"
import NewTodoItem from "../components/NewTodoItem"
import { todoItemService } from "../services/TodoItemService"

const GET_ALL = "get-all"
const ADD = "add"
const REMOVE = "remove"
const COMPLETE = "complete"

const todoItemsReducer = (todoItems, action) => {
  switch (action.type) {
    case GET_ALL:
      return action.payload
    case ADD:
      return [...todoItems, action.payload]
    case REMOVE:
      return todoItems.filter((todoItem) => todoItem.id !== action.payload)
    case COMPLETE:
      return todoItems.map((todoItem) =>
        todoItem.id === action.payload
          ? { ...todoItem, isCompleted: true }
          : todoItem
      )
    default:
      throw Error(`Unhandled action type ${action.type}.`)
  }
}

const TodoHomePage = () => {
  const [todoItems, dispatch] = useReducer(todoItemsReducer, [])

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
