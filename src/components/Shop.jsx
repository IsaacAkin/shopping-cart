import { useState } from 'react';
import { Outlet } from 'react-router';
import { Navbar, ShopNavbar } from "./utils";
import '../styles/styles.css';

export default function Shop() {
  const [cart, setCart] = useState(() => {
    const selectedItems = localStorage.getItem('cart');
    return selectedItems ? JSON.parse(selectedItems) : [];
  });

  let quantity = 0;
  cart.forEach(item => {
    quantity += item.itemCount;
  })

  return (
    <div className="app">
      <Navbar cartItems={quantity}/>
      <div className="shop">
        <ShopNavbar />
        <div className="main-contents" style={{ border: '1px solid red'}}>
          <Outlet context={[cart, setCart]} />
        </div>
      </div>
    </div>
  )
}
