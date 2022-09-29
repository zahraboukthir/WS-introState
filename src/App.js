import React, { Component } from 'react'
import Counter from './component/Counter'
import './App.css'
export default class App extends Component {
  state={
    show:false
  }

toggle = () => { 
  this.setState({show:!this.state.show})
  console.log(this.state.show)
 }
  render() {
    return (
      <div className='App'>
        <button onClick={this.toggle}>{this.state.show ? "Hide": "Show"} </button>
        {
          this.state.show ? <Counter/> : "click to see counter"
        }
      </div>
    )
  }
}
