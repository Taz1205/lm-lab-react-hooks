import { useThemeContext } from "./use_theme_context";

export const Child2 = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div style={theme}>
      Child 2 <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
