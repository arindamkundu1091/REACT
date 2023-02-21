import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import QuizPage from "./components/UI/Card/QuizPage";
import StartQuiz from "./components/UI/Button/StartQuiz";
import Result from "./components/UI/Input/Result";

function App() {
  return (
    <>
      <h2 className="heading">Quizz App</h2>
      <Routes>
        <Route exact path="/" element={<StartQuiz />}/>
        <Route path="/quizpage" element={<QuizPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
