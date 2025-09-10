import { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";

const ImagesContext = createContext();

export function ImagesProvider({ children }) {
  const [images, setImages] = useState(() => {
    const stored = localStorage.getItem("images");
    return stored ? JSON.parse(stored) : [];
  });


  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
  }, [images]);

  
  const addImage = useCallback(({ id, title }) => {
        const numId = Number(id);
        if (Number.isNaN(numId) || numId < 0) throw new Error("ID debe ser un número válido");
        if (!title?.trim()) throw new Error("Título requerido");
        const url = `https://picsum.photos/id/${numId}/200/300`;

        const exists = images.some(i => i.id === numId);
        const newImg = { id: numId, title: title.trim(), url };
        const toSave = exists
            ? images.map(i => (i.id === numId ? newImg : i)) 
            : [newImg, ...images];

        localStorage.setItem("images", JSON.stringify(toSave));
        setImages(toSave);
        window.location.reload(); 
    }, [images]);


  const value = useMemo(() => ({ images, addImage, setImages }), [images, addImage]);

  return <ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>;
}

ImagesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useImages() {
  const ctx = useContext(ImagesContext);
  if (!ctx) throw new Error("useImages must be used within ImagesProvider");
  return ctx;
}
