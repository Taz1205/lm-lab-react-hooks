import { useThemeContext } from "./use_theme_context";

export const Child1 = () => {
  const { theme, isDarkTheme, toggleTheme } = useThemeContext();

  return (
    <div style={theme}>
      Child 1 <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current theme is: {isDarkTheme ? "Dark" : "Light"}</p>
    </div>
  );
};
