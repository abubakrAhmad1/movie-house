// pages/api/directors.js
import data from '../../data/data.json';

export default function handler(req, res) {
    // console.log("api");
    // console.log(data);
  const { movies, directors } = data;

  const response = {
    movies,
    directors ,
  };

  res.status(200).json(response);
}
