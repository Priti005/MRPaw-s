
import React from 'react';
import IMG from './Pic/pic1.jpg' 
import Header from './components/common/header/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header />
      <img src={IMG} alt=""/>
    </div>
    
  );
}

export default App;