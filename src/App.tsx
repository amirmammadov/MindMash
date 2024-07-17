import s from "./sass/pages/_app.module.scss";

import { useGlobalContext } from "./hooks/useGlobalContext";

import Button from "./components/Button/Button";

import Question from "./components/Question/Question";
import Result from "./components/Result/Result";

const App = () => {
  const { started, finished } = useGlobalContext();

  return (
    <main className={s.main}>
      {!started ? (
        <>
          <h3 className={s.title}>React JS Quiz</h3>
          <Button text="Start Quiz" />
        </>
      ) : !finished ? (
        <Question />
      ) : (
        <Result />
      )}
    </main>
  );
};

export default App;
