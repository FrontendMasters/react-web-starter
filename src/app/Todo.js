import React, { Component } from 'react';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }
  handleClick(e) {
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''});
  }
  
  handleChange(e) {
    this.setState({newTodo: e.target.value})
  }
  
  render() {
    return(
      <div>
        <input type="text" value={this.state.newTodo} onChange={this.handleChange.bind(this)}/>
        <button onClick={this.handleClick.bind(this)}>click</button>
        {this.state.todos.map(todo => (<div>{todo}</div>))}
      </div>
    );
  }
}
