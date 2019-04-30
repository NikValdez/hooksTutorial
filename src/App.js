import React, { createContext, useState } from 'react'
import './App.css'
import Posts from './Posts'
import Todo from './Todo'

export const PostContext = createContext()

function App() {
  const [name, setName] = useState('')
  const [value, setValue] = useState('')

  const handleChange = e => {
    setValue(e.target.value)
  }

  const updateValue = e => {
    e.preventDefault()
    setName(value)
  }

  return (
    <PostContext.Provider value={{ showPost: false }}>
      <div className="name">
        <p>My name is {value}</p>
        <div>
          <input type="text" value={value} onChange={handleChange} />
          <button onClick={updateValue}>Submit</button>
          <p>Hey there, {name}</p>
        </div>
        <Posts />
        <Todo />
      </div>
    </PostContext.Provider>
  )
}

export default App
