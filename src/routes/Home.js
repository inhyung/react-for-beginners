import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // new way to fetch API
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json(); // json : function!
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="App">
      <h1>Movies</h1>
      {loading ? (
        <h3>loading...</h3>
      ) : (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            coverImage={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
          />
        ))
      )}
    </div>
  );
}

export default Home;
