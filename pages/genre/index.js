import path from "path";
import fs from "fs";

export default function Genres({ data }) {
  const allGenres = data.genres;
  return (
    <div>
      <ul>
        {allGenres.map((genre) => (
          <li>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileData);

  return {
    props: {
      data: data,
    },
  };
}
