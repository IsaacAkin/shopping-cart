// import { useState, useEffect } from 'react';
// import useFetchProducts from '../hooks/useFetchProducts';
// import { MainContents } from './utils';
import { Outlet } from 'react-router';
import '../styles/styles.css';
import { Navbar, ShopNavbar } from "./utils";

export default function Shop() {
  //   const [products, setProducts] = useState(null);
  //   const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(true);

  //   // const mensClothing = products && products.filter(items => items.category === "men's clothing");
  //   // const womansClothing = products && products.filter(items => items.category === "women's clothing");
  //   // const jewelery = products && products.filter(items => items.category === "jewelery");
  //   // const electronics = products && products.filter(items => items.category === 'electronics');

  //   useEffect(() => {
  //       async function fetchProducts() {
  //           try {
  //               const response = await fetch('https://fakestoreapi.com/products');
                
  //               if (!response.ok) {
  //                   throw new Error(`Error: ${response.status}`);
  //               }

  //               const data = await response.json();
                
  //               setProducts(data.filter(items => items.category === 'electronics'));
  //           } catch (err) {
  //               setError(err)
  //           } finally {
  //               setLoading(false);
  //           }
  //       }

  //       fetchProducts();
  //   }, []);

  // return (
  //   <>
  //     <Navbar />
  //     {loading && <p>Loading...</p>}
  //     {error && <p>Error loading content</p>}
  //     {products && (
  //       products.map(items => (
  //         <div key={items.id}>
  //           {/* <p>{items.image}</p> */}
  //           <img src={items.image} alt={items.title} />
  //           <p>{items.title}</p>
  //           <p>{items.price}</p>
  //           <p>{items.description}</p>
  //           <p style={{ fontWeight: 'bold' }}>{items.category}</p>
  //         </div>
  //       ))
  //     )}
  //   </>
  // )

  return (
    <div className="shop">
      <Navbar />
      <div className="wrapper">
        <ShopNavbar />
        <div className="main-contents" style={{ border: '1px solid red'}}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
