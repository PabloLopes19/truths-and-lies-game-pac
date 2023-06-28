import "./styles/global.css";

import data from "./data.json";
import { useState } from "react";

type question = {
  id: number;
  curiosidade: string;
  verdadeiro: boolean;
};

import * as S from "./styles/app";

export default function App() {
  const questions = data.sort(() => 0.5 - Math.random());

  const [current, setCurrent] = useState<number>(0);
  const [score, setScore] = useState(0);

  function answerQuestion(ans: boolean) {
    if (questions[current].verdadeiro == ans) {
      alert("Acertou!");
      setScore(score + 10);
      setCurrent(current + 1);
    } else {
      alert("Errou!");
      setCurrent(0);
      setScore(0);
    }
  }

  const handleKeyboardSelect = (e: any) => {
    if (e.key === "ArrowLeft") answerQuestion(true);
    if (e.key === "ArrowRight") answerQuestion(false);
  };

  return (
    <S.Container onKeyDown={handleKeyboardSelect}>
      <S.ControlPanel>
        <S.Question>
          <div className="header">
            <span>Questão: {current + 1}</span>
            <span>Pontuação: {score}</span>
          </div>{" "}
          {questions[current].curiosidade}
        </S.Question>

        <div>
          <S.Alternative
            onClick={() => answerQuestion(true)}
            style={{ borderBottomLeftRadius: "12px" }}
          >
            Verdadeiro
          </S.Alternative>
          <S.Alternative
            onClick={() => answerQuestion(false)}
            style={{ borderBottomRightRadius: "12px" }}
          >
            Falso
          </S.Alternative>
        </div>
      </S.ControlPanel>
    </S.Container>
  );
}
