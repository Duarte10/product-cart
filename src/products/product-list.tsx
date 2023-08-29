import { useEffect, useState } from "react";
import IProduct from "../interfaces/IProduct";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const products = data.map((p:any) => { return {
            id: p.id,
            title: p.title,
            price: p.price,
            image: p.image
        }});
        setProducts(products);
      });
  }, []);

  return <>
  <table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        {
            products.map(p => 
                <tr key={p.id}>
                    <td><Link to={`/product/${p.id}`}>{p.id}</Link></td>
                    <td>{p.title}</td>
                    <td><img src={p.image} style={{height:'50px'}} alt={p.title}/></td>
                    <td>{p.price}</td>
                </tr>
            )
        }
    </tbody>
  </table>
  </>;
}

export default ProductList;
