import "./styles/global.css";

import data from "./data.json";
import { useEffect, useState } from "react";

import * as S from "./styles/app";
import ContentDialog from "./components/ContentDialog";

type question = {
  id: number;
  curiosidade: string;
  verdadeiro: boolean;
};

export default function App() {
  const [questions, setQuestions] = useState<question[] | null>(null);

  const [current, setCurrent] = useState<number>(0);
  const [score, setScore] = useState(0);

  const [modalOpen, setModalOpen] = useState(true);

  function answerQuestion(ans: boolean) {
    if (questions)
      if (questions[current].verdadeiro == ans) {
        // eslint-disable-next-line
        alert("Acertou!");
        setScore(score + 10);
        setCurrent(current + 1);
      } else {
        alert("Errou!");
        setCurrent(0);
        setScore(0);
      }
  }

  useEffect(() => setQuestions(data.sort(() => 0.5 - Math.random())), []);

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
          {questions && questions[current].curiosidade}
        </S.Question>

        <div>
          <ContentDialog open={modalOpen} changeOpen={setModalOpen} />
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
