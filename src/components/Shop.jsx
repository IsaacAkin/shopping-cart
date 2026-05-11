import { useState } from 'react';
import { Outlet } from 'react-router';
import { Navbar, ShopNavbar } from "./utils";
import '../styles/styles.css';

export default function Shop() {
  const [cart, setCart] = useState([]);

  return (
    <div className="app">
      <Navbar />
      <div className="shop">
        <ShopNavbar />
        <div className="main-contents" style={{ border: '1px solid red'}}>
          <Outlet context={[cart, setCart]} />
        </div>
      </div>
    </div>
  )
}
