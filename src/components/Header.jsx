import React from 'react';
import Logo from '../assets/logo.png';
import Watch from './Watch';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={Logo} className="logo" />
        <Watch />
      </header>
    );
  }
}
