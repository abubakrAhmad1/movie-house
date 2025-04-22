import path from "path";
import fs from "fs";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileData);

  return {
    //params should be an array of objects with type => {params : {id : value}}
    params: data.movies.map((movie) => (
        {id : movie.id}
    )),
  };
}
