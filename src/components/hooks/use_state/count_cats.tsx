import { useState } from "react";

export function CountCats() {
  const [countCats, setCountCats] = useState(1);

  function getCats() {
    const cats = [];
    for (let i = 0; i < countCats; i++) {
      cats.push("🐈 ");
    }

    return cats;
  }

  function addCat() {
    setCountCats(countCats + 1);
  }
  return (
    <>
      <h2>useState</h2>

      <p>{getCats()}</p>

      <button onClick={addCat}>There are {countCats} cats 🥳</button>
    </>
  );
}
