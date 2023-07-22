import "./App.css";
import { Parent } from "./components/hooks/use_context/parent";
import { APICall } from "./components/hooks/use_effect/use_effect";
import { MemoExample } from "./components/hooks/use_memo/useMemo";
import { Todo1, Todo2 } from "./components/hooks/use_x/todo";
import { CountRenders } from "./components/hooks/use_ref/count_renders";
import { Focus } from "./components/hooks/use_ref/focus";
import { CountCats } from "./components/hooks/use_state/count_cats";
// import { TaskApp } from './components/hooks/use_reducer/todo_app';
import { Section } from "./components/section";
import { TaskApp } from "./components/hooks/use_reducer/todo_app";
import { StarWarsCharacter } from "./components/hooks/use_x(SWAPI)/star_wars_character";
import { Pokemon } from "./components/hooks/use_x(Pokemon)/pokemon";
import { CatImage } from "./components/hooks/use_x(CatImage)/cat_image";

function App() {
  return (
    <>
      <div className="App">
        <Section>
          <Parent />
        </Section>

        <Section>
          <APICall />
        </Section>

        <Section>
          <MemoExample />
        </Section>

        <Section>
          <CountRenders />
          <Focus />
        </Section>

        <Section>
          <CountCats />
        </Section>

        <Section>
          <h2>Todos</h2>
          <Todo1 />
          <Todo2 />
        </Section>

        <Section>
          This is an extension!
          <TaskApp />
        </Section>

        <Section>
          This is another extension about custom hooks!
          <StarWarsCharacter />
        </Section>
        <Section>
          <Pokemon />
        </Section>
        <Section>
          <CatImage />
        </Section>
      </div>
    </>
  );
}

export default App;
