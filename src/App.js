import React from 'react';
import Header from './components/Header/Header'
import { useSelector } from 'react-redux'
import './App.css';

function App() {
  const store = useSelector(state => state);
  return (
    <div className="App">
      <Header />
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
  );
}

export default App;
