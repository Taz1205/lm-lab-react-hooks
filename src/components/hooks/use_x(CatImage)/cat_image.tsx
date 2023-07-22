import { useTodo } from "../use_x/use_todo";

interface CatResponse {
  url: string;
}

export const CatImage = () => {
  const url = `https://api.thecatapi.com/v1/images/search?api_key=live_4HDV1u3sSP3TaZpYhh8TtilgvxC8mOakCG84rfTY5HeFu4jBMBwY1pXK900wkA4D`;
  const { data, isFetching, error } = useTodo<CatResponse[]>(url);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (isFetching || !data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Random Cat Image</h2>
      <img src={data[0].url} alt="Random Cat" />
    </div>
  );
};
