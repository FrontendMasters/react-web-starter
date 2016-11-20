import React, { Component } from 'react';

export class Todo extends Component {
  constructor () {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleChange (e) {
    const { value } = e.target;
    this.setState({newTodo: value});
  }

  handleClick (e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''});
  }

  render () {
    return (
      <div>
        <input type="text" placeholder="new todo" value={this.state.newTodo} onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>Add Todo</button>
        <ul>
          {this.state.todos.map(todo => <li>{todo}</li>)}
        </ul>
      </div>
    );
  }
}