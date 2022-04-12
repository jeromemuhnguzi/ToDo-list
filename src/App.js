import React from 'react'
import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import Form from './Form'
//import { Switch, BrowserRouter } from 'react-router-dom'

function Todo ({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className='todo'
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Done</button>
        <button onClick={() => removeTodo(index)}>Delete</button>
      </div>
    </div>
  )
}

{
  /*
function Form() {
  return(
    <div>
     
    <Form />
    <BrowserRouter>
      <Routes>
        <Route path='/App' component={App} />
        <Route path='/' component={Form} />
      </Routes>
      </BrowserRouter>
     
      <nav>
        <Link to='/Form'> Log in/Register </Link>
        </nav>
  </div>)
}  */
}

function TodoForm ({ addTodo }) {
  const [value, setValue] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

function App () {
  const [todos, setTodos] = React.useState([
    { text: 'Wake up', isCompleted: false },
    { text: 'Code', isCompleted: false },
    { text: 'Sleep', isCompleted: false }
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
        {/*<Form /> */}
      </div>
      {/*
      <nav className = 'R'
>
        <Link to='/Form' >
          {' '}
          Log-in/Register{' '}
        </Link>
        </nav>  */}
      
    </div>
  )
}

export default App
