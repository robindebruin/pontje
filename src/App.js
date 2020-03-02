import React from 'react';
import './App.scss';
import Routes from './components/Routes';

function App() {
  return (
    <div className="container">
      <div className="section">
        {/* <Header /> */}
        <Routes></Routes>
      </div>
    </div>
  );
}

export default App;
