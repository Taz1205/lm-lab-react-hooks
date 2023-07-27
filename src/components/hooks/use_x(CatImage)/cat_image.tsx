import { useTodo } from "../use_x/use_todo";
import { environment } from "../../../config/config";

interface CatResponse {
  url: string;
}

export const CatImage = () => {
  const url = `https://api.thecatapi.com/v1/images/search?api_key=${environment.API_KEY}`;
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
