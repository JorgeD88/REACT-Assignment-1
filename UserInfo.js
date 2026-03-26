// UserInfo.js
// UserInfo.js
import React, { Component } from "react";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe",
      profession: "Developer",
      luckyNumber: Math.floor(Math.random() * 100) + 1
    };
  }

  generateNewLuckyNumber = () => {
    this.setState({
      luckyNumber: Math.floor(Math.random() * 100) + 1
    });
  };

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Profession: {this.state.profession}</p>
        <p>Your lucky number is: {this.state.luckyNumber}</p>
        <button onClick={this.generateNewLuckyNumber}>
          Generate New Lucky Number
        </button>
      </div>
    );
  }
}

export default UserInfo;
