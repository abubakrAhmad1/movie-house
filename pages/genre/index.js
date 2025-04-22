import path from "path";
import fs from "fs";
import Link from "next/link";

export default function Genres({ data }) {
  const allGenres = data.genres;
  return (
    <div>
      <ul>
        {allGenres.map((genre) => (
          <li><Link href={`./genre/${genre.id}`}>{genre.name}</Link></li>
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
