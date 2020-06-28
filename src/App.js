import React from 'react';
import { Button } from '@material-ui/core'
import Header from './components/Header/Header'
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <br></br>
        <Button color="primary" variant="contained">Material UI Button</Button>
    </div>
  );
}

export default App;
