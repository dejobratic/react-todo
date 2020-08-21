const GET_ALL = "get-all"
const ADD = "add"
const REMOVE = "remove"
const CHANGE_STATUS = "change-status"

const todoItemsReducer = (todoItems, action) => {
  switch (action.type) {
    case GET_ALL:
      return action.payload
    case ADD:
      return [...todoItems, action.payload]
    case REMOVE:
      return todoItems.filter((todoItem) => todoItem.id !== action.payload)
    case CHANGE_STATUS:
      return todoItems.map((todoItem) =>
        todoItem.id === action.payload
          ? { ...todoItem, isCompleted: !todoItem.isCompleted }
          : todoItem
      )
    default:
      throw Error(`Unhandled action type ${action.type}.`)
  }
}

export { todoItemsReducer }
export { GET_ALL, ADD, REMOVE, CHANGE_STATUS }
