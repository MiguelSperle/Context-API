import React, { createContext, useState, useContext } from 'react';

interface MyContextData {
  count: number;
  increment: () => void;
}

const MyContext = createContext<MyContextData | undefined>(undefined);

export const useMyContext = (): MyContextData => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext deve ser utilizado dentro de um MyContextProvider');
  }
  return context;
};

export const MyContextProvider: React.FC = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };


  return (
    <MyContext.Provider value={{ increment, count}}>
        {children}
    </MyContext.Provider>;
  )
};
