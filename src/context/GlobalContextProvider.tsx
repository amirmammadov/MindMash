import React, { createContext, useState } from "react";

export interface ContextProps {
  started: boolean;
  finished: boolean;
  count: number;
  handleStart: () => void;
  handleFinish: () => void;
  increaseCount: () => void;
}

const GlobalContext = createContext<ContextProps>({
  started: false,
  finished: false,
  count: 0,
  handleStart: () => {},
  handleFinish: () => {},
  increaseCount: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [count, setCount] = useState(0);

  const handleFinish = () => {
    setFinished(true);
  };

  const handleStart = () => {
    setStarted(true);
    setFinished(false);
    resetCount();
  };

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <GlobalContext.Provider
      value={{
        started,
        finished,
        handleFinish,
        handleStart,
        count,
        increaseCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
