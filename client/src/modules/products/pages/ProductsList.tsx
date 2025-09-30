import { useEffect, useState } from "react";

interface Product {
  product_id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  is_onsale: boolean;
}

function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <ul>
        {products.map((p) => (
          <li key={p.product_id}>
            <strong>{p.name}</strong> - ${p.price} <br />
            <small>{p.description}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
