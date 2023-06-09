import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkModeState, setDarkModeState] = useState(true); // Initial value is true

  const toggleDarkMode = () => {
    setDarkModeState((prevDarkMode) => !prevDarkMode); // Toggle the dark mode state
  };

  return (
    <DarkModeContext.Provider value={{ darkModeState, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
