import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from './Components/Main'
import './App.css';
import Heading from './Components/Heading';



function App() {
  return (
    <BrowserRouter>
      <div style={{backgroundColor: 'white'}}>
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
