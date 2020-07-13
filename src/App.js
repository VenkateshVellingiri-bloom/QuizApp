import React from 'react';
import Header from './components/Header/Header'
import Help from './components/Help/Help'
import { BrowserRouter, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './App.css';

function App() {
  const store = useSelector(state => state);
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Route path="/help" component={Help} />
      <br />
      <div>
        {
          //  {return {...}} => ()
          store.questions.map((question, index) => (
            <div key={index}> {question.question}</div>
          ))
        }
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
