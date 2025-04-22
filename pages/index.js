import fs from "fs";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";
import path from "path";

export default function Home({ data }) {
  const router = useRouter();

  function handle() {
    router.push('/genre');
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
  if(!finalData) {
    return {
      notFound : true
    }
  }
  return {
    props: {
      data: finalData,
    },
    revalidate : 10,
  };
}
