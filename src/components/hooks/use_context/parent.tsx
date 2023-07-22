import { ThemeProvider } from "./theme_context";

import { Child1 } from "./child_1";
import { Child2 } from "./child_2";

export const Parent = () => {
  return (
    <ThemeProvider>
      <div className="section">
        <h2>useContext</h2>
        <Child1 />
        <Child2 />
      </div>
    </ThemeProvider>
  );
};
