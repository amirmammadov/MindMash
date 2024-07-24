import { useState } from "react";

import s from "../../sass/components/_question.module.scss";

import AnswerItem from "../AnswerItem/AnswerItem";

import { useGlobalContext } from "../../hooks/useGlobalContext";

import { QUES_NUMBER } from "../../constants";

import { questions } from "../../data/questions";

const QUES_SIZE = questions.length;

const Question = () => {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(false);

  const { handleFinish } = useGlobalContext();

  const { question, answers } = questions[count];

  const handleSwitch = () => {
    if (!selected) {
      return;
    }

    if (count === QUES_SIZE - 1) {
      handleFinish();
      return;
    }

    setCount((prev) => prev + 1);
    setSelected(false);
  };

  const handleAnswer = () => {
    setSelected(true);
  };

  return (
    <div className={s.question}>
      <div className={s.header}>
        <div className={s.title}>{question}</div>
        <div className={s.count}>{`${count + 1}/${QUES_NUMBER}`}</div>
      </div>
      <div className={s.answers}>
        {answers.map((answer) => (
          <AnswerItem
            key={answer.title}
            title={answer.title}
            isCorrect={answer.isCorrect}
            selected={selected}
            handleAnswer={handleAnswer}
          />
        ))}
      </div>
      <button
        className={`${s.nextBtn} ${selected && s.clicked}`}
        onClick={handleSwitch}
      >
        Next Question
      </button>
    </div>
  );
};

export default Question;
