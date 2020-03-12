/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Info from "./card_components/info";
import data from "../data/data";

export default class card extends Component {
  constructor() {
    super();
    this.state = {
      people: data,
      index: 0
    };
  }
  increment = () => {
    if (this.state.index < this.state.people.length - 1) {
      this.setState({ index: this.state.index + 1 });
    } else {
      this.setState({ index: 0 });
    }
  };
  render() {
    let { people, index } = this.state;

    return (
      <div className="card_wrapper">
        <div className="card">
          <Info
            name={people[index].name}
            id={people[index].id}
            city={people[index].city}
            employer={people[index].employer}
            title={people[index].title}
            favoriteMovies={people[index].favoriteMovies}
          />
        </div>
        <div className="button-wrap">
          <a
            onClick={() => {
              if (index !== 0) {
                this.setState({ index: index - 1 });
              }
            }}
            className="arrow_button"
          >
            <span>&#x3c; Previous</span>
          </a>
          <div>
            <button className="button">Edit</button>
            <button className="button">Delete</button>
            <button className="button">New</button>
          </div>
          <a className="arrow_button" onClick={this.increment}>
            <span>Next &#x3e; </span>
          </a>
        </div>
      </div>
    );
  }
}
