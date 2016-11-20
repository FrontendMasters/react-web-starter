import React, { Component } from 'react';

export class Todo extends Component {
  constructor () {
    super();
    this.state = {
      tasks: [],
      value: ''
    }
  }

  handleChange (e) {
    this.setState({value: e.target.value});
  }

  handleClick () {
    const tasks = [...this.state.tasks, this.state.value];
    this.setState({tasks});
  }

  render () {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>Add Task</button>
        <ul>
          {this.state.tasks.map(task => (<li key={task}>{task}</li>))}
        </ul>
      </div>
    );
  }
}