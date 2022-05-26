import './App.css';
import React from 'react';
import Usercard from './Components/Usercard';

function App() {
  return (
    <div className="App">
              <div className='heading'><h1>USERS</h1></div>

      <div className="content">
  
        <Usercard/>

      </div>
    </div>
  );
}

export default App;
