import path from "path";
import fs from "fs";
import Link from "next/link";

export default function Movies({ data }) {
  return (
    <div>
      {data.movies.map((movie) => (
        <Link href={`/movies/${movie.id}`} key={movie.id}>
          <div>
            <p>--------------------------------------</p>
            <h3>Title : {movie.title}</h3>
            <p>Discription : {movie.description}</p>
            <p>year : {movie.releaseYear}</p>
            <p>Rating : {movie.rating}</p>
            <p>--------------------------------------</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileData);

  return {
    props: {
      data: data,
    },
    revalidate: 10,
  };
}
