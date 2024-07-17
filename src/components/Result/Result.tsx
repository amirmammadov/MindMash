import s from "../../sass/components/_result.module.scss";

import Button from "../Button/Button";

const Result = () => {
  return (
    <div className={`${s.result} ${s.passed}`}>
      <div className={s.text}>Oops!</div>
      <div className={s.score}>Your score is 5 out of 50</div>
      <Button text="Start Over" />
    </div>
  );
};

export default Result;
