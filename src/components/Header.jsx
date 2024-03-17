import React from 'react';
import Logo from '../assets/logo.png';
import Watch from './Watch';
import LanguageSwitch from './LanguageSwitch';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={Logo} className="logo" />
        <Watch />
        <LanguageSwitch />
      </header>
    );
  }
}
