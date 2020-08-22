const GET_TODO_ITEMS = "get-todo-items"
const ADD_TODO_ITEM = "add-todo-item"
const REMOVE_TODO_ITEM = "remove-todo-item"
const CHANGE_TODO_ITEM_STATUS = "change-todo-item-status"

const todoItemReducer = (todoItems, action) => {
  switch (action.type) {
    case GET_TODO_ITEMS:
      return action.payload
    case ADD_TODO_ITEM:
      return [...todoItems, action.payload]
    case REMOVE_TODO_ITEM:
      return todoItems.filter((todoItem) => todoItem.id !== action.payload)
    case CHANGE_TODO_ITEM_STATUS:
      return todoItems.map((todoItem) =>
        todoItem.id === action.payload
          ? { ...todoItem, isCompleted: !todoItem.isCompleted }
          : todoItem
      )
    default:
      throw Error(`Unhandled todo items reducer action type ${action.type}.`)
  }
}

export { todoItemReducer }
export {
  GET_TODO_ITEMS,
  ADD_TODO_ITEM,
  REMOVE_TODO_ITEM,
  CHANGE_TODO_ITEM_STATUS,
}
