import React, { useState } from 'react'

function Todos({ todo, index, removeTodo }) {
  return (
    <div>
      {todo.text}
      <div>
        <button onClick={() => removeTodo(index)}>Delete</button>
      </div>
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

function Todo() {
  const [todos, setTodos] = useState([])

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <Todos key={index} index={index} todo={todo} removeTodo={removeTodo} />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default Todo
