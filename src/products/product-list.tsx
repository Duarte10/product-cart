import { useEffect, useState } from "react";
import IProduct from "../interfaces/IProduct";

function ProductList() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);
  return <></>;
}

export default ProductList;
