import React, { Component } from 'react';

const nums = [1,2,3,4]

export class Todo extends Component {

  constructor() {
    super();
    this.state = {
      nums: [1,2,3,4]
    }
  }

  handleClick(e) {
    const nums = [...this.state.nums, 6];

    this.setState({nums})
  }

  render() {
    return(
      <div>
        <input type="text" />
        <button onClick={this.handleClick.bind(this)}>Click</button>
        {this.state.nums.map(num => (<h3 key={num}>{num}</h3>))}
      </div>
    );
  }
}
