"use client";
import { useEffect, useState } from 'react';

export default function ClientSideFetching() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        
  
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.statusText}`);
        }

        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        
        setError(`Error fetching products: ${err instanceof Error ? err.message : 'Unknown error occurred'}`);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  
  if (loading) {
    return <div className="text-center mt-96 text-2xl font-semibold text-gray-200">Loading...</div>;
  }

  
  if (error) {
    return <div className="text-center text-2xl font-semibold text-red-600">{error}</div>;
  }

  
  if (products.length === 0) {
    return <div className="text-center text-2xl font-semibold text-gray-600">No products available</div>;
  }

  return (
    <div className="p-6 min-h-screen bg-indigo-300">
      <h1 className="text-4xl font-black text-center text-gray-800 mb-6">Client-Side Fetched Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => {
          const { id, title, image, description, price } = product;
          const safeTitle = title || 'No Title Available';
          const safeImage = image || '/placeholder.png'; 
          const safeDescription = description || 'No Description Available';
          const safePrice = price || '0.00';

          return (
            <div
              key={id || `product-${index}`} 
              className="bg-gray-200 shadow-lg w-full rounded-lg p-6 transform transition duration-300 hover:scale-105"
            >
              <img
                src={safeImage} 
                alt={safeTitle} 
                className="h-60 w-full mb-4 object-contain"
              />
              <h2 className="text-lg font-semibold text-gray-800 text-center truncate">
                {safeTitle}
              </h2>
              <p className="text-sm text-gray-700 text-center line-clamp-2">
                {safeDescription}
              </p>
              <p className="mt-4 text-indigo-500 font-bold text-lg text-center">
                ${safePrice}
              </p>
              <div className="mt-4 flex justify-center space-x-4">
                
                <button className="px-24 py-2 bg-blue-500 text-white font-medium rounded hover:bg-gray-600 transition">
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
