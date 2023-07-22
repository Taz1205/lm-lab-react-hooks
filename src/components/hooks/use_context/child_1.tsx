import { useThemeContext } from "./use_theme_context";

export const Child1 = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div style={theme}>
      Child 1 <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
