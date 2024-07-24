import { useState } from "react";

import s from "../../sass/components/_answer.module.scss";

import { useGlobalContext } from "../../hooks/useGlobalContext";

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

  const { increaseCount } = useGlobalContext();

  const handleAnswerClick = () => {
    if (selected) {
      return;
    }

    if (!isCorrect) {
      setWrongAnswerClicked(true);
    } else {
      increaseCount();
    }

    handleAnswer();
  };

  return (
    <button
      className={`${s.answerItem} ${selected && isCorrect && s.correct} ${
        wrongAnswerClicked && s.wrong
      }`}
      onClick={handleAnswerClick}
    >
      {title}
    </button>
  );
};

export default AnswerItem;
