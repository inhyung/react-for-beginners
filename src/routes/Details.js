import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Details() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>{detail.title}</h1>
    </div>
  );
}

export default Details;
