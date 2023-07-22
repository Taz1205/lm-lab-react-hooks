import { useContext } from "react";
import { ThemeContext } from "./theme_context";

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
