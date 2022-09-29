import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      memory:null
    };
    console.log("constructor(props)");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount()");
    clearInterval(this.state.memory)
  }
  componentDidUpdate() {
    console.log("componentDidUpdate()");
    console.log(this.state.memory)

  }
  componentDidMount() {
    console.log("componentDidMount()");
  this.setState({memory:  setInterval(() => {
    this.setState({count:this.state.count + 1})
}, 1000)})

  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    // && return the first falsy value ( this.state.count =0)
    this.setState({ count: this.state.count && this.state.count - 1 });
  };
  render() {
    console.log("render()")
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <p> {this.state.count} </p>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
