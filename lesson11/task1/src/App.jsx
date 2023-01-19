import React, { Component } from 'react';
import Numbers from './Numbers';
import EvenNumbers from './EvenNumbers';
import OddNumbers from './OddNumbers';

class App extends Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        number: this.state.number + 1,
      });
    }, 1000);
    console.log(this.intervalId);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    console.log(this.intervalId);
    return (
      <div className="app">
        <OddNumbers title="Odd numbers" number={this.state.number} />
        <EvenNumbers title="Even numbers" number={this.state.number} />
        <Numbers title="All numbers" number={this.state.number} />
        <Numbers title="All numbers" number={5} />
      </div>
    );
  }
}

export default App;
