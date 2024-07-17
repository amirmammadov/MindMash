import s from "./sass/pages/_app.module.scss";

import Button from "./components/Button/Button";

// import Question from "./components/Question/Question";
// import Result from "./components/Result/Result";

const App = () => {
  return (
    <main className={s.main}>
      <h3 className={s.title}>React JS Quiz</h3>
      <Button text="Start Quiz" />
      {/* <Question /> */}
      {/* <Result /> */}
    </main>
  );
};

export default App;
