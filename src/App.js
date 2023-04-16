import './App.css';
import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header name="Anna" color="purple" />
      <Main greet="Howdy" />
      <Sidebar greet="Howdy" />
    </div>
  );
};


export default App;
