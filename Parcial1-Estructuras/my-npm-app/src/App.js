import { Routes, Route, Link, Navigate } from "react-router-dom";
import Gallery from "./pages/Gallery";
import ImageDetail from "./pages/ImageDetail";

export default function App() {
  return (
    <div className="container">

      <nav style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <Link to="/">Galería</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/image/:id" element={<ImageDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

