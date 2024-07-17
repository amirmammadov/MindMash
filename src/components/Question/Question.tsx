import { useState } from "react";

import s from "../../sass/components/_question.module.scss";

import { useGlobalContext } from "../../hooks/useGlobalContext";

import { questions } from "../../data/questions";

const Question = () => {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(false);

  const { handleFinish } = useGlobalContext();

  const { question, answers } = questions[count];

  const handleSwitch = () => {
    if (!selected) {
      return;
    }

    if (count === 9) {
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
        <div className={s.count}>{`${count + 1}/${10}`}</div>
      </div>
      <div className={s.answers}>
        {/* <div className={`${s.answerItem} ${s.correct}`}>React</div>
        <div className={`${s.answerItem} ${s.wrong}`}>React.Js</div>
        <div className={s.answerItem}>ReactJS</div>
        <div className={s.answerItem}>All of the above</div> */}
        {answers.map((answer) => (
          <button
            key={answer.title}
            className={s.answerItem}
            onClick={handleAnswer}
          >
            {answer.title}
          </button>
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
