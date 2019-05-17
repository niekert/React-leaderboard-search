import React, { Component } from "react";
import usersJSON from "../data.json";

export default class Table extends Component {
  state = {
    users: usersJSON
  };

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <table className="table table-striped" data-testid="leaderboard-table">
          <thead>
            <tr key="head">
              <th>Age</th>
              <th>Name</th>
              <th>Points</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody />
        </table>
      </div>
    );
  }
}
