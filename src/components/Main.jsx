import React from 'react';
import * as data from '../assets/data.json';

export default class Main extends React.Component {
  state = {
    page: 1,
    totalPages: Math.ceil(Object.keys(data.ru).length / 10),
  };

  render() {
    return (
      <main className="main">
        <div className="reviewlist">
          {this.state.totalPages}
          {Object.entries(data.ru)
            .slice((this.state.page - 1) * 10, this.state.page * 10)
            .map((entry, i) => (
              <div key={i} className="review">
                <h3>{entry[1].name}</h3>
                <p>{entry[1].review}</p>
                <p>{entry[1].date}</p>
              </div>
            ))}
        </div>
      </main>
    );
  }
}
