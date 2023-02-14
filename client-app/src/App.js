import React from 'react'
import './App.css'
import QuizPage from './components/QuizPage';
import ShowResult from './components/ShowResult';
import StartQuiz from './components/StartQuiz';
import Result from './components/Result';

function App() {
  return (
    <>
      <h2 className="heading">Quizz App</h2>
      <StartQuiz />
      <QuizPage />
      <ShowResult />
      <Result/>
    </>
  );
}

export default App;
