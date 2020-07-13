import React from 'react';
import Header from './components/Header/Header'
import Question from './components/Question/Question'
import { useSelector } from 'react-redux'
import './App.css';

function App() {
  const store = useSelector(state => state);
  return (
    <div className="App">
      <Header />
      <Question />
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
