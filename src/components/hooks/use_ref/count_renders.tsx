import { useState, useRef } from "react";

export const CountRenders = () => {
  const [value, setValue] = useState("");
  const renderCount = useRef(0);

  renderCount.current = renderCount.current + 1;

  return (
    <>
      <h2>useRef</h2>

      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />

      <p>{value}</p>
      <p>I have rendered {renderCount.current} times</p>
    </>
  );
};
