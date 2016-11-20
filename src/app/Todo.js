import React, { Component } from 'react';

export class Todo extends Component {
  constructor () {
    super();
    this.state = {
      todos: []
    }
  }

  handleClick (e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.input.value];
    this.input.value = '';
    this.setState({todos});
  }

  removeTodo (i) {
    const todos = [...this.state.todos.slice(0, i), ...this.state.todos.slice(i + 1)];
    this.setState({todos});
  }

  render () {
    return (
      <div>
        <form>
          <input 
            ref={node => this.input = node} 
            type="text" placeholder="new todo" />
          <button onClick={this.handleClick.bind(this)}>Add Todo</button>
        </form>
        <ul>
          {this.state.todos.map((todo, i) => (
            // onClick handles removing todo from list
            <li onClick={() => this.removeTodo.call(this, i)}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}