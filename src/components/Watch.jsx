import React from 'react';

export default class Watch extends React.Component {
  state = {
    currentTime: undefined,
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString('it-IT'),
      });
    }, 1000);
  }

  render() {
    return <h2>{this.state.currentTime}</h2>;
  }
}
