import React, { Component } from 'react';
import './app.css';
import Timer from './timer.js'
import Icon from './icon.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      showTimer: true,
    }
  }

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(( data ) => {
        return this.setState({ todos: data.todos })
      });
  }

  toggleTimer() {
    this.setState({
      showTimer: !this.state.showTimer,
    })
  }

  render() {
    const todos = this.state.todos
      ? this.state.todos.map((todo, index) => {
          return (
            <div key={todo.id} style={styles.container}>
              { Icon(todo.completed) }
              <div style={styles.item}>{ todo.title }</div>
            </div>
          );
        })
      : ( 'Loading ...' );

    return (
      <div>
        <h1> { this.props.title }</h1>
        {(
          this.state.showTimer
           ?  (<Timer
               start={500}
              />)
           : null
        )}
        <div>
          { todos }
        </div>
        <button onClick={this.toggleTimer.bind(this)}> Toggle Timer </button>
      </div>
    );
  }
}

const styles = {
  container: {
    marginLeft: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  item: {
    padding: '10px',
  }
}
