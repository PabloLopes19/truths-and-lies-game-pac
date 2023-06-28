import "./styles/global.css";

import data from "./data.json";
import { useEffect, useState } from "react";

import * as S from "./styles/app";
import ContentDialog from "./components/ContentDialog";

import * as Progress from "@radix-ui/react-progress";

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

  const percentage = (current * 100) / questions?.length;

  console.log(percentage);

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

      <Progress.Root
        max={100}
        style={{
          width: "100%",
          borderRadius: "500px",
          maxWidth: 800,
          display: "flex",
          justifyContent: "start",
        }}
        className="progress"
        value={40}
      >
        <Progress.Indicator
          style={{
            left: 0,
            width: `${percentage}%`,
            transition: "all 0.2s ease-out",
            borderRadius: "500px",
          }}
          className="progBar"
        />
      </Progress.Root>
    </S.Container>
  );
}
