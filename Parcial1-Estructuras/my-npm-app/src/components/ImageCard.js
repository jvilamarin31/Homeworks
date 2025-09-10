import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ImageCard({ image }) {
  return (
    <article className="card">
      <img className="thumb" src={image.url} alt={image.title} />
      <h3 style={{ marginTop: 8 }}>{image.title}</h3>
      <p style={{ fontSize: 12, opacity: 0.7 }}>ID: {image.id}</p>
      <Link to={`/image/${image.id}?title=${encodeURIComponent(image.title)}`}>Ver detalle</Link>
    </article>
  );
}

ImageCard.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
