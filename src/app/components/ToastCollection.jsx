import React from "react"

import Toast from "app/components/Toast"

const ToastCollection = ({ toasts = [] }) => {
  {
    console.log(toasts)
  }
  return (
    <>
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
        >
          {toasts.map((toast) => (
            <Toast key={toast.id} toast={toast} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ToastCollection
