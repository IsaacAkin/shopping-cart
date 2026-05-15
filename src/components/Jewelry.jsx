import '../styles/styles.css';
import { MainContent } from "./utils";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router";

export default function Jewelry() {
  const [jewelery, setJewelery] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useOutletContext();

  function handleCart(id, title, price, category, image, itemCount) {
    const existingProduct = cart.find(product => product.id === id);

    if(existingProduct) {
      setCart(previous => (previous.map(product => product.id === id ? { ...product, itemCount: product.itemCount + itemCount } : product)));
    } else {
      setCart(previous => ([ ...previous, { id, title, price, category, image, itemCount }]));
    }
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
      async function fetchProducts() {
          try {
              const response = await fetch('https://fakestoreapi.com/products');
              
              if (!response.ok) {
                  throw new Error(`Error: ${response.status}`);
              }

              const data = await response.json();
              
              setJewelery(data.filter(items => items.category === "jewelery"));
          } catch (err) {
              setError(err)
          } finally {
              setLoading(false);
          }
      }

      fetchProducts();
  }, []);

  return (
    <div className='grid-container'>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading content</p>}
      {
        jewelery && (
          <MainContent products={jewelery} onClick={handleCart} />
        )
      }
    </div>
  )
}
