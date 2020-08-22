import React, { useReducer, createContext } from "react"

import { toastReducer } from "app/common/ToastReducer"

const ToastContext = createContext({})

const ToastProvider = ({ children }) => {
  const [toasts, dispatchToast] = useReducer(toastReducer, [])

  return (
    <ToastContext.Provider value={{ toasts, dispatchToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export { ToastContext, ToastProvider }
