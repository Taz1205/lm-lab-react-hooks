import { useTodo } from "../use_x/use_todo";

export interface SWCharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const StarWarsCharacter = () => {
  const { data, isFetching, error } = useTodo<SWCharacter>(
    "https://swapi.dev/api/people/1/"
  );

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h2>Star Wars Character</h2>
      {isFetching ? (
        <p>Fetching...</p>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {data?.name}
          </p>
          <p>
            <strong>Height:</strong> {data?.height}
          </p>
          <p>
            <strong>Mass:</strong> {data?.mass}
          </p>
          <p>
            <strong>Hair Color:</strong> {data?.hair_color}
          </p>
          <p>
            <strong>Skin Color:</strong> {data?.skin_color}
          </p>
          <p>
            <strong>Eye Color:</strong> {data?.eye_color}
          </p>
          <p>
            <strong>Birth Year:</strong> {data?.birth_year}
          </p>
          <p>
            <strong>Gender:</strong> {data?.gender}
          </p>
        </div>
      )}
    </>
  );
};
