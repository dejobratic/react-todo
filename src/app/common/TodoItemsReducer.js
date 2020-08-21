export const GET_ALL = "get-all"
export const ADD = "add"
export const REMOVE = "remove"
export const COMPLETE = "complete"

export const TodoItemsReducer = (todoItems, action) => {
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
