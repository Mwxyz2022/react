import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    online: true,
  };

  onToggle = e => {
    const { onLine } = e.target.navigator;
    this.setState({
      online: onLine,
    });
  };

  componentDidMount() {
    window.addEventListener('offline', this.onToggle);
    window.addEventListener('online', this.onToggle);
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.onToggle);
    window.removeEventListener('online', this.onToggle);
  }

  render() {
    if (!this.state.online) {
      return <div className="status status_offline">offline</div>;
    }
    return <div className="status">online</div>;
  }
}

export default ConnectionStatus;
