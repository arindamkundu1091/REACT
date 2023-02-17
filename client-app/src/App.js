import React from 'react'
import './App.css'
import QuizPage from './components/UI/Card/QuizPage';
import ShowResult from './components/UI/Button/ShowResult';
import StartQuiz from './components/UI/Button/StartQuiz';
import Result from './components/UI/Input/Result';

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
