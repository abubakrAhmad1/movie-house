import path from "path";
import fs from "fs";
import Link from 'next/link';

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileData);

  return {
    //params should be an array of objects with type => {params : {id : value}}
    paths: data.movies.map((movie) => ({
      params: { id: movie.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileData);

  const selectedMovie = data.movies.find(
    (movie) => movie.id.toString() === params.id
  );

  return {
    props: {
      movie: selectedMovie,
    },
    revalidate : 10
  };
}

export default function Discription({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>{movie.releaseYear}</p>
      <Link href = {`/movies/${movie.id}/director`}>Director</Link>
      <p>{movie.rating}</p>
    </div>
  );
}
