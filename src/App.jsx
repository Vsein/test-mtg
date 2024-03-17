import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reviews from './components/Reviews';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Reviews />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
