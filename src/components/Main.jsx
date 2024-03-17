import React from 'react';
import { connect } from 'react-redux';
import * as data from '../assets/data.json';

class Main extends React.Component {
  state = {
    page: 1,
    totalPages: Math.ceil(Object.keys(this.props.language.value === 'ru' ? data.ru : data.en).length / 10),
  };

  render() {
    return (
      <main className="main">
        <div className="reviewlist">
          <div className="reviewlist-pages">
            {[...Array(this.state.totalPages)].map((page, i) => (
              <p
                key={i}
                className={`${this.state.page === i + 1 ? 'active' : ''}`}
                onClick={() =>
                  this.setState({
                    page: i + 1,
                  })
                }
              >
                {i + 1}
              </p>
            ))}
          </div>
          {Object.entries(this.props.language.value === 'ru' ? data.ru : data.en)
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

function mapStateToProps(state) {
  const { language } = state;
  return {
    language,
  };
}

export default connect(mapStateToProps)(Main);
