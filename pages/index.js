import fs from "fs";
import path from "path";

export default function Home({ data }) {

  function handle() {

  }
  const trendingMovies = data.movies.filter(movie => movie.rating >= 8.5);
  return (
    <div>
      <h2>TRENDING MOVIES..!!!</h2>
      {trendingMovies.map((movie) => (
        <div>{movie.title}</div>
      ))}
      <button onClick={handle}>Browse Generes</button>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const finalData = JSON.parse(fileData);
  return {
    props: {
      data: finalData,
    },
  };
}
