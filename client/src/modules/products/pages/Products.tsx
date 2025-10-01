import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  product_id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  is_onsale: boolean;
}

function Products() {
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
      <h1 className="font-bold">Take a look into our products!</h1>
      <ul className="flex gap-2 flex-wrap justify-around">
        {products.map((p) => (
          <Link to={`/products/${p.product_id}`} key={p.product_id}>
            <li className="bg-white mb-1 p-4 min-w-2xs">
              <div className="text-2xl font-bold">
                {p.name}
              </div>
              <br />
              <div>
                ${p.price} 
              </div>
              <br />
              <div className="flex justify-between">
                {p.description}
                <button className="uppercase bg-black px-1 text-white" type="button">Add to cart</button>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Products;
