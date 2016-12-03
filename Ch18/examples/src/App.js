import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
        items: [],
        text: '',
    }
  }
  onChange(e) {
    this.setState({text: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    const nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
    const nextText = '';
    this.setState({items: nextItems, text: nextText});
  }
  render() {
    return (
      <div className="container">
        <h3>TODO App</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button type="submit">{'Add #' + (this.state.items.length + 1)}</button>
        </form>
        <hr/>
        <TodoList items={this.state.items} />
      </div>
    );
  }
}

export default App;
