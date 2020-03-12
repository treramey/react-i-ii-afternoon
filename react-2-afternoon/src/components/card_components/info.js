import React, { Component } from "react";

export default class info extends Component {
  render() {
    let movies = this.props.favoriteMovies.map(element => <li>{element}</li>);
    let name = `${this.props.name.first} ${this.props.name.last}`;
    return (
      <div>
        <div className="name">
          <span className="name_line">{name}</span>
        </div>
        <div className="main-info">
          <div>
            <span>From:</span>
            {this.props.city}
          </div>
          <div>
            <span>Job Title:</span>
            {this.props.title}
          </div>
          <div>
            <span>Employer:</span>
            {this.props.employer}
          </div>
        </div>

        <div>
          <h2>Favorite Movies:</h2>
          <ol>{movies}</ol>
        </div>
        <div className="pageNumber">
          <div>
            {this.props.id}
            /25
          </div>
        </div>
      </div>
    );
  }
}
