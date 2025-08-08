import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import SegmentEditor from "../components/SegmentEditor";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = import.meta.env.VITE_PRODUCT_SERVICE;
      try {
        if (!url) {
          throw new Error("Backend URL is not set in environment variables");
        }
        const res = await axios.get(`${url}/products`);
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <SegmentEditor setProducts={setProducts} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {products.map((prod: any) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
