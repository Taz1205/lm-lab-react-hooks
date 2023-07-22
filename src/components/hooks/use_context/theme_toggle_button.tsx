import { useContext } from "react";
import { ThemeContext } from "./theme_context";

const ThemeToggleButton: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { theme, toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}> Toggle Theme</button>;
};

export default ThemeToggleButton;
