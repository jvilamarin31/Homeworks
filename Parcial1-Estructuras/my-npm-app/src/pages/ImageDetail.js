import { useParams, useSearchParams, Link, useNavigate } from "react-router-dom";
import { useImages } from "../context/ImagesContext";

export default function ImageDetail() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { images, setImages } = useImages();

  const numId = Number(id);
  const found = images.find((i) => i.id === numId);

 
  const title = found?.title || params.get("title") || `Imagen ${numId}`;
  const url = found?.url || `https://picsum.photos/id/${numId}/600/900`;

  const handleDelete = () => {
    const next = images.filter((i) => i.id !== numId);
    localStorage.setItem("images", JSON.stringify(next));
    setImages(next);
    navigate("/", { replace: true });
  };

  return (
    <section>
      <h1 style={{ marginBottom: 12 }}>{title}</h1>
      <img
        src={url}
        alt={title}
        style={{ width: "100%", maxWidth: 640, height: "auto", borderRadius: 12 }}
      />
      <p style={{ opacity: 0.7, marginTop: 8 }}>ID: {numId}</p>

      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <button onClick={() => navigate(-1)}>Volver</button>
        <button onClick={handleDelete}>Eliminar</button>
        <Link to="/">Ir a galería</Link>
      </div>
    </section>
  );
}
