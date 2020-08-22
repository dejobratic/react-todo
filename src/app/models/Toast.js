// generate mock id
const generateId = () => {
  const min = 12234
  const max = 43112

  return Math.floor(Math.random() * max) + min
}

class Toast {
  constructor(title, message, visibilityDuration = 1000) {
    this.id = generateId()
    this.title = title
    this.message = message
    this.visibilityDuration = visibilityDuration
  }
}

export default Toast
