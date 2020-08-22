const ADD_TOAST = "add-toast"
const REMOVE_TOAST = "remove-toast"

const toastReducer = (toasts, action) => {
  switch (action.type) {
    case ADD_TOAST:
      return [...toasts, action.payload]
    case REMOVE_TOAST:
      return toasts.filter((toast) => toast.id === action.payload)
    default:
      throw Error(`Unhandled toast reducer action type ${action.type}`)
  }
}

export { toastReducer }
export { ADD_TOAST, REMOVE_TOAST }
