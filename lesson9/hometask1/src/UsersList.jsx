import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
    };
  }

  onChange = filterText => {
    console.log(filterText);
    this.setState({
      users: this.props.users.filter(user => user.name.toLowerCase().includes(filterText)),
    });
  };

  render() {
    return (
      <>
        <Filter onChange={this.onChange} count={this.state.users.length} />
        <ul className="users">
          {this.state.users.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </>
    );
  }
}

export default UsersList;
