import s from "../../sass/components/_button.module.scss";

import { useGlobalContext } from "../../hooks/useGlobalContext";

interface IButton {
  text: string;
}

const Button = ({ text }: IButton) => {
  const { handleStart } = useGlobalContext();

  return (
    <button className={s.startBtn} onClick={handleStart}>
      {text}
    </button>
  );
};

export default Button;
