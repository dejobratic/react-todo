const { restService } = require("./RestService")
const { default: TodoItem } = require("../models/TodoItem")

const url = "https://jsonplaceholder.typicode.com/todos"

class TodoItemService {
  async getAll() {
    const rawTodoItems = await restService.get(url)
    return rawTodoItems
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
