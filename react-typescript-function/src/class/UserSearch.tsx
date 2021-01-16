import React, { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface Props {
  users: User[];
}
interface State {
  name: string;
  user: User | undefined;
}

export default class UserSearch extends Component<Props, State> {
  state: State = {
    name: '',
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find(user => user.name === this.state.name);

    this.setState({ user: foundUser });
  };

  render() {
    return (
      <div className="">
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>{this.state.user?.name}</div>
      </div>
    );
  }
}
