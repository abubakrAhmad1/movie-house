import path from "path";
import fs from "fs";

export default function movies(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  let { id } = req.query;
  id = parseInt(id);
  const filePath = path.join(process.cwd(), "data", "data.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileData);
  const movie = data.movies.find((m) => m.id === id);
  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }
  return res.status(200).json(movie);
  
}
