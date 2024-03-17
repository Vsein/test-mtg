import React from 'react';
import { connect } from 'react-redux';
import { changeTo } from '../state/languageSlice';

class Main extends React.Component {
  render() {
    return (
      <button
        onClick={() => this.props.onClick(this.props.language.value === 'ru' ? 'en' : 'ru')}
        style={{ cursor: 'pointer' }}
      >
        {this.props.language.value}
      </button>
    );
  }
}

function mapStateToProps(state) {
  const { language } = state;
  return {
    language,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (lang) => {
      dispatch(changeTo({ newLanguage: lang }));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
