import { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="p-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="h-40 object-contain w-full" />
            <h2 className="mt-2 font-semibold">{product.title}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
