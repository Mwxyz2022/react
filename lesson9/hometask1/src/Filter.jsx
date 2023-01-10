import React, { Component } from 'react';

class Filter extends Component {
  state = {
    filterText: '',
  };

  handleChange = event => {
    const { value } = event.target;

    this.setState({
      filterText: value,
    });

    this.props.onChange(value);
  };

  render() {
    return (
      <div className="filter">
        <span className="filter__count">{this.props.count}</span>
        <input
          type="text"
          className="filter__input"
          onChange={this.handleChange}
          value={this.state.filterText}
        />
      </div>
    );
  }
}

export default Filter;
