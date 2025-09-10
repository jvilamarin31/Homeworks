import { useState } from "react";
import { useImages } from "../context/ImagesContext";

export default function ImageForm() {
  const { addImage } = useImages();
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    try {
      if (!title.trim()) throw new Error("Título requerido");
      if (!id.trim()) throw new Error("ID requerido");
      addImage({ id, title });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: 12 }}>
      <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="number" placeholder="ID (número)" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="submit">Agregar</button>
      {error && <p style={{ gridColumn: "1 / -1", color: "crimson" }}>{error}</p>}
    </form>
  );
}
