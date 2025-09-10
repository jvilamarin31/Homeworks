import PropTypes from "prop-types";
import ImageCard from "./ImageCard";

export default function ImageList({ images }) {
  if (images.length === 0) return <p>No hay imágenes.</p>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))", gap: 16 }}>
      {images.map((img) => (
        <ImageCard key={`${img.id}-${img.title}`} image={img} />
      ))}
    </div>
  );
}

ImageList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
