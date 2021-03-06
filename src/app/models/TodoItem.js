// generate mock id
const generateId = () => {
  const min = 12234
  const max = 43112

  return Math.floor(Math.random() * max) + min
}

class TodoItem {
  constructor(title, isCompleted, creatorId) {
    this.id = generateId()
    this.title = title
    this.isCompleted = isCompleted
    this.creatorId = creatorId
  }
}

export default TodoItem
