import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super()
    this.state = {
      time: props.start,
      timer: null,
    }
  }

  updateTime() {
    this.setState({
      time: this.state.time + 1,
    })
  }

  componentDidMount() {
    this.state.timer = setInterval(this.updateTime.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  render() {
    return (
      <div> {this.state.time} </div>
    )
  }
}

export default Timer
