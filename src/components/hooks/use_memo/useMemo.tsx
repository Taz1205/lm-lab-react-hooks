import { useState, useMemo } from "react";

export const MemoExample = () => {
  console.log("Rendering component...");

  const [numberObj, setNumberObj] = useState({ input: 0 });
  const numbers = [1, 2, 3];

  const doubleNumber = useMemo(
    () => slowFunction(numberObj.input),
    [numberObj.input]
  );

  return (
    <>
      <h2>useMemo</h2>

      {numbers.map((number) => (
        <button key={number} onClick={() => setNumberObj({ input: number })}>
          Double {number}
        </button>
      ))}

      <p className="use-memo__text">{doubleNumber}</p>
    </>
  );
};

function slowFunction(num: number) {
  console.log("calling slow function... 🐌");
  for (let i = 0; i <= 1000000000; i++) {
    // ⏰
  }
  const result = num * 2;
  console.log(`result: ${result}`);
  return result;
}
