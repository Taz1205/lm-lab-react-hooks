import { useContext } from "react";
import { ThemeContext } from "./parent"; // Remember to import the context from Parent.tsx

// Remove the props since the theme is now coming from the context
export const Child2: React.FC = () => {
  // Use the useContext hook to access the theme from the context
  const theme = useContext(ThemeContext);

  return <div style={theme}>Child 2</div>;
};
