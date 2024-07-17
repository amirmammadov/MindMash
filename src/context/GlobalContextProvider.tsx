import React, { createContext, useState } from "react";

export interface ContextProps {
  started: boolean;
  finished: boolean;
  handleStart: () => void;
  handleFinish: () => void;
}

const GlobalContext = createContext<ContextProps>({
  started: false,
  finished: false,
  handleStart: () => {},
  handleFinish: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleFinish = () => {
    setFinished(true);
  };

  const handleStart = () => {
    setStarted(true);
    setFinished(false);
  };

  return (
    <GlobalContext.Provider
      value={{ started, finished, handleFinish, handleStart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
