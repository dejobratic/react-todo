import React, { useState, useContext } from "react"
import { Toast as BootstrapToast } from "react-bootstrap"

import { ToastContext } from "app/common/ToastContext"
import { REMOVE_TOAST } from "app/common/ToastReducer"

const Toast = ({ toast = {} }) => {
  const [isVisible, setVisibility] = useState(true)

  const { dispatchToast } = useContext(ToastContext)

  const handleCloseToast = (toastId) => {
    dispatchToast({ type: REMOVE_TOAST, payload: toastId })
    setVisibility(false)
  }

  return (
    <BootstrapToast show={isVisible} onClose={() => handleCloseToast(toast.id)}>
      <BootstrapToast.Header>
        <strong className="mr-auto">{toast.title}</strong>
      </BootstrapToast.Header>
      <BootstrapToast.Body>{toast.message}</BootstrapToast.Body>
    </BootstrapToast>
  )
}

export default Toast
