import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function DirectorsPage() {
  const router = useRouter();
  const id = router.query.id;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/director')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to fetch:", err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>Directors</h1>
      {data.directors.map((director) => (
        <div key={director.id}>
          <h2>{director.name}</h2>
          <p>{director.biography}</p>
        </div>
      ))}
    </div>
  );
}
