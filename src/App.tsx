import "./styles/global.css";

import data from "./data.json";
import { useState } from "react";

type question = {
  id: number;
  curiosidade: string;
  verdadeiro: boolean;
};

export default function App() {
  //eslint-disable-next-line
  const [questions, setQuestions] = useState<question[]>(data);
  const [current, setCurrent] = useState<number>(0);
  const [score, setScore] = useState(0);

  function answerQuestion(ans: boolean) {
    if (questions[current].verdadeiro == ans) {
      alert("Acertou!");
      setScore(score + 10);
      setCurrent(current + 1);
    } else {
      alert("Errou!");
      setCurrent(current + 1);
    }
  }

  return (
    <div>
      <h1>{questions[current].curiosidade}</h1>
      <button onClick={() => answerQuestion(true)}>Verdadeiro</button>
      <button onClick={() => answerQuestion(false)}>Falso</button>
      score: {score}
    </div>
  );
}
