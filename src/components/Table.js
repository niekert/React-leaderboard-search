import React, { Component } from "react";
import usersJSON from "../data.json";

export default class Table extends Component {
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
          <tbody>
            {usersJSON.map(user => (
              <tr>
                <td>{user.age}</td>
                <td>{user.name}</td>
                <td>{user.points}</td>
                <td>{user.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
