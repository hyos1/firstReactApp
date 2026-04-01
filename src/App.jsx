import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.bz/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year",
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h3>Loading....</h3>
      ) : (
        movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image} alt="" />
            <h2>제목: {movie.title}</h2>
            <p>별점: {movie.rating}</p>
            <ul>
             장르: {movie.genres.map(g => <li key={g}>{g}</li>)}
             </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
