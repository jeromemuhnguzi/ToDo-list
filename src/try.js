import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      data: [
        {
          name: 'Harry'
        },
        {
          name: 'Jerome'
        }
      ]
    }
  }
  render () {
    return (
      <div>
        <StudentName />
        <ul>
          {this.state.data.map(item => (
            <List data={item} />
          ))}
        </ul>
      </div>
    )
  }
}
