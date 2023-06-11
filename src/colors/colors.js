import React, { Component } from 'react'

export default class Colors extends Component {
  
  render() {
    return (
      <div className='col-md-4 mx-auto d-flex'>
        <p>select a color:</p>
        <button onClick={() => {this.props.changeTextColor("red")}}>red</button>
        <button onClick={() => {this.props.changeTextColor("blue")}}>blue</button>
        <button onClick={() => {this.props.changeTextColor("green")}}>green</button>
      </div>
    )
  }
}