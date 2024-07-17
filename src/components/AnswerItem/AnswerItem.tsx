import { useState } from "react";

import s from "../../sass/components/_answer.module.scss";

interface IAnswerItem {
  title: string;
  isCorrect: boolean;
  selected: boolean;
  handleAnswer: () => void;
}

const AnswerItem = ({
  title,
  isCorrect,
  selected,
  handleAnswer,
}: IAnswerItem) => {
  const [wrongAnswerClicked, setWrongAnswerClicked] = useState(false);

  const handleAnsweClick = () => {
    if (!isCorrect) {
      setWrongAnswerClicked(true);
    }
    handleAnswer();
  };

  return (
    <button
      className={`${s.answerItem} ${selected && isCorrect && s.correct} ${
        wrongAnswerClicked && s.wrong
      }`}
      onClick={handleAnsweClick}
    >
      {title}
    </button>
  );
};

export default AnswerItem;
