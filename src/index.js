import React from 'react'
import ReactDOM from 'react-dom'
import {  Routes, Route } from 'react-router-dom'
import './App.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Form from './Form'



ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
)
