import { restService } from "app/services/RestService"

import TodoItem from "app/models/TodoItem"

const url = "https://jsonplaceholder.typicode.com/todos"

class TodoItemService {
  async getAll() {
    const rawTodoItems = await restService.get(url)
    return rawTodoItems
      // get todo items user with specified id
      .filter((todoItem) => todoItem.userId === 1)
      .map(
        (todoItem) =>
          new TodoItem(
            todoItem.id,
            todoItem.title,
            todoItem.completed,
            todoItem.userId
          )
      )
  }
}

export const todoItemService = new TodoItemService()
