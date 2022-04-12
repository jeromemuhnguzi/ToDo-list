import React from 'react'

const ToDo = ({ todo }) => {
  return <div className='{todo.complete ? "strike" :  ""}'>{todo.task}</div>
}

export default ToDo

//import Todo from "./Todo";

import React from 'react'
import './App.css'

/*
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App () {
  const contacts = [
    {
      id: '1',
      name: 'Jerome',
      email: 'j@gmail.com'
    },
    {
      id: '2',
      name: 'Kawamara',
      email: 'k@gmail.com'
    }
  ]

  return (
    <>
      <div className='ui container'>
        <Header />
        <AddContact />
        <ContactList />{' '}
      </div>{' '}
    </>
  )
}
export default App



import React, { useState } from 'react'
import './App.css'
import data from './employees.json'
import Header from './Header'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

function App () {
  const [toDoList, setToDoList] = useState(data)
  // const [toDoForm, setToDoForm] = useState(ToDoForm)

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete
    })
    setToDoList(filtered)
  }

  const handleToggle = id => {
    let mapped = toDoList.map(task => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task }
    })
    setToDoList(mapped)
  }

 const handleForm = () => {
    return ToDoForm


  return (
    <div className='App'>
      <Header />
      {/* <ToDoList toDoList={toDoList} /> */}
      {/*<ToDoForm />*/}
  {/*</div >*/}
{/*) }
}

*/