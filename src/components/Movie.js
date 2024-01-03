import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({ id, coverImage, title, summary }) {
  return (
    <div key={id}>
      <Link to={`/movie/${id}`}>
        <img alt="" src={coverImage} />
      </Link>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Movie;
