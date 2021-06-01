import React from 'react';
import './App.css';
import Navbar from './Tabbar';
import Sidebar from './sidebar';
import Content from './content';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      
    </div>
  );
}

export default App;
