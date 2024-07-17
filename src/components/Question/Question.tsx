import s from "../../sass/components/_question.module.scss";

const Question = () => {
  return (
    <div className={s.question}>
      <div className={s.header}>
        <div className={s.title}>
          Which of the following is the correct name of React.js?
        </div>
        <div className={s.count}>1 / 10</div>
      </div>
      <div className={s.answers}>
        <div className={`${s.answerItem} ${s.correct}`}>React</div>
        <div className={`${s.answerItem} ${s.wrong}`}>React.Js</div>
        <div className={s.answerItem}>ReactJS</div>
        <div className={s.answerItem}>All of the above</div>
      </div>
      <div className={`${s.nextBtn} ${s.clicked}`}>Next Question</div>
    </div>
  );
};

export default Question;
