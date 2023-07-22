import { useTodo } from "../use_x/use_todo";

interface PokemonCharacter {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
}

export const Pokemon = () => {
  const { data, isFetching, error } = useTodo<PokemonCharacter>(
    "https://pokeapi.co/api/v2/pokemon/pikachu"
  );

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h2>Pokemon</h2>
      {isFetching ? (
        <p>Fetching...</p>
      ) : (
        <div>
          <p>
            <strong>Id:</strong> {data?.id}
          </p>
          <p>
            <strong>Name:</strong> {data?.name}
          </p>
          <p>
            <strong>Base_experience:</strong> {data?.base_experience}
          </p>
          <p>
            <strong>Height:</strong> {data?.height}
          </p>
          <p>
            <strong>Weight:</strong> {data?.weight}
          </p>
        </div>
      )}
    </>
  );
};
