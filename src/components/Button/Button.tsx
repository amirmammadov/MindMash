import s from "../../sass/components/_button.module.scss";

const Button = ({ text }: { text: string }) => {
  return <div className={s.startBtn}>{text}</div>;
};

export default Button;
