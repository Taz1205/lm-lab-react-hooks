import React, { createContext, useState, ReactNode } from "react";

interface ThemeContextProps {
  theme: {
    backgroundColor: string;
    color: string;
    padding: string;
    margin: string;
  };
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: {
    backgroundColor: "",
    color: "",
    padding: "",
    margin: "",
  },
  isDarkTheme: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((theme) => !theme);
  };

  const theme = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "white" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDarkTheme: darkTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
