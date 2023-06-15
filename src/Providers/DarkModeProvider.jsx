import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkModeState, setDarkModeState] = useState(false); 

  const toggleDarkMode = () => {
    setDarkModeState((prevDarkMode) => !prevDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkModeState, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
