import s from "../../sass/components/_result.module.scss";

import { useGlobalContext } from "../../hooks/useGlobalContext";

import { calculateScore } from "../../helpers";

import Button from "../Button/Button";

const Result = () => {
  const { count } = useGlobalContext();

  console.log(count);

  const { isPassed, ownScore, totalScore } = calculateScore(count);

  return (
    <div className={`${s.result} ${isPassed ? s.passed : s.failed}`}>
      <div className={s.text}>{isPassed ? "Awesome!" : "Oops!"}</div>
      <div className={s.score}>
        Your score is {ownScore} out of {totalScore}
      </div>
      <Button text="Start Over" />
    </div>
  );
};

export default Result;
