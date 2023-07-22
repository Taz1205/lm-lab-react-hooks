import { useThemeContext } from "./use_theme_context";

export const Child2 = () => {
  const { theme, isDarkTheme, toggleTheme } = useThemeContext();

  return (
    <div style={theme}>
      Child 2 <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current theme is: {isDarkTheme ? "Dark" : "Light"}</p>
    </div>
  );
};
