// UserInfo.js
// UserInfo.js
import React, { Component } from "react";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe",
      profession: "Developer"
    };
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Profession: {this.state.profession}</p>
        <button onClick={this.props.handleClick}>Show Alert</button>
      </div>
    );
  }
}

export default UserInfo;