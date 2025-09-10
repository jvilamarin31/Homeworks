import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SearchBar() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") || "");

  useEffect(() => { setQuery(params.get("q") || ""); }, [params]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (query) setParams({ q: query.trim() });
    else setParams({});

    window.location.reload();
  };

  return (
    <form onSubmit={onSubmit} className="search">
      <input
        type="text"
        placeholder="Filtrar por título..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
