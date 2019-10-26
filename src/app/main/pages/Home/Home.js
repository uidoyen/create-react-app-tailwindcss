import React, { Component } from "react";
import logo from "assets/images/logo.svg";
export default class Home extends Component {
  render() {
    return (
      <div className="flex container text-white justify-center items-center h-full">
        <img src={logo} alt="" className="w-1/3" />
      </div>
    );
  }
}
