import React, { Component } from 'react';

class SearchBar extends Component {
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={e => this.handleFilterTextChange(e)}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={e => this.handleInStockChange(e)}
          />
          Only show products in stock
        </p>
      </form>
    );
  }
}
export default SearchBar;
