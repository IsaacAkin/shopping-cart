import '../styles/styles.css';
import { MainContent } from "./utils";
import { useState, useEffect } from "react";
// import { useOutletContext } from "react-router";

export default function Mens() {
  const [mensClothing, setMensClothing] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [cart, setCart] = useOutletContext();

  // function handleCart() {
  //   setCart(previous => ({...previous, }))
  // }

  useEffect(() => {
      async function fetchProducts() {
          try {
              const response = await fetch('https://fakestoreapi.com/products');
              
              if (!response.ok) {
                  throw new Error(`Error: ${response.status}`);
              }

              const data = await response.json();
              
              setMensClothing(data.filter(items => items.category === "men's clothing"));
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
        mensClothing && (
          <MainContent items={mensClothing} />
        )
      }
    </div>
  )
}