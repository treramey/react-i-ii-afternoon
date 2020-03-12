import React, { Component } from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Card />
      </div>
    );
  }
}
