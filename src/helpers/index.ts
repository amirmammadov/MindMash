import {
  QUES_NUMBER,
  SCORE_FOR_ONE_QUES,
  PASSED_LIMIT,
} from "../constants/index";

export const calculateScore = (count: number) => {
  const result = (count / QUES_NUMBER) * 100;

  const isPassed = result >= PASSED_LIMIT;

  const totalScore = QUES_NUMBER * SCORE_FOR_ONE_QUES;

  const ownScore = count * SCORE_FOR_ONE_QUES;

  return { isPassed, ownScore, totalScore };
};
