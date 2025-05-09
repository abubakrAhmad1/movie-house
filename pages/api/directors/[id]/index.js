import path from "path";
import fs from "fs";

export default function directors(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { id } = req.query;
  const filePath = path.join(process.cwd(), "data", "data.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileData);

  const director = data.directors.find((d) => d.id === id);
  if (!director) {
    return res.status(404).json({ message: "Director not found" });
  }

  const movieTitles = data.movies
    .filter((m) => m.directorId === id)
    .map((m) => m.title);

  const final = {
    ...director,
    movies: movieTitles,
  };

  return res.status(200).json(final);
}
