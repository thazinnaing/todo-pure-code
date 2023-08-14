import { useState, useEffect, createContext } from 'react';
import './App.css';
import Form from './components/form.jsx';
import List from './components/list';

const App=()=> {

  return(
    
    <div className="container">
      <h1>List for your daily routine</h1>
      <Form/>
      <List/>
    </div>

  )
}

export default App;