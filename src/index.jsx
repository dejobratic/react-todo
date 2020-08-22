import React from "react"
import ReactDOM from "react-dom"

import App from "app/App"
import { ToastProvider } from "app/common/ToastContext"

import "index.css"
import "bootstrap/dist/css/bootstrap.css"

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
