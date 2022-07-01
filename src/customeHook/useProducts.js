import { useEffect } from "react";
import { useState } from "react";

const useProducts = (value) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/${value}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products];
};

export default useProducts;
