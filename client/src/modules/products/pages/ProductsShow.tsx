import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Product {
    product_id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    is_onsale: boolean;
}

function ProductsShow() {
    const { id } = useParams<{ id: string }>();
    const [products, setProducts] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchProduct = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/products/${id}`);
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching product:", error);
        } finally {
            setLoading(false);
        }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (!products) return <p className="text-center mt-10">Product not found.</p>;

    return (
        <div>
            <Link to="/products" className="text-blue-500 underline">
                ← Back to Products
            </Link>
            <div className="flex-1">
                <h1 className="text-2xl font-bold mb-4">{products.name}</h1>
                <p className="text-gray-600 mb-2">Items on Inventory: {products.stock}</p>
                <p className="text-xl font-semibold mb-4">${products.price}</p>
                <p className="text-gray-700">{products.description}</p>
            </div>
        </div>
    );
}

export default ProductsShow;