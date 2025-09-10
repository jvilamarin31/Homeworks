import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useImages } from "../context/ImagesContext";
import ImageForm from "../components/ImageForm";
import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";

export default function Gallery() {
  const { images } = useImages();
  const [params] = useSearchParams();
  const q = (params.get("q") || "").toLowerCase();

  const filtered = useMemo(() => {
    if (!q) return images;
    return images.filter((img) => img.title.toLowerCase().includes(q));
  }, [images, q]);

  return (
    <section>
      <h1>Galería</h1>
      <ImageForm />
      <div style={{ marginTop: 16, marginBottom: 16 }}>
        <SearchBar />
      </div>
      <ImageList images={filtered} />
    </section>
  );
}
