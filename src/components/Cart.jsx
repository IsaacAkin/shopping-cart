import '../styles/styles.css';
import { Basket } from "./utils";
import { Navbar } from "./utils";
import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState(() => {
    const selectedItems = localStorage.getItem('cart');
    return selectedItems ? JSON.parse(selectedItems) : [];
  });

  function increaseItemCount(id) {
    setCart(previous => (previous.map(product => product.id === id ? { ...product, itemCount: product.itemCount + 1 } : product)));
  }
  
  function decreaseItemCount(id) {
    setCart(previous => (previous.map(product => product.id === id ? { ...product, itemCount: product.itemCount - 1 } : product)));
  }

  function removeItem(id) {
    setCart(previous => previous.filter(products => products.id !== id));
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className='app'>
      <Navbar cartItems={cart.length} />
      <div className="cart">
        { cart &&
          <Basket 
            products={cart}
            increase={increaseItemCount}
            decrease={decreaseItemCount}
            onClick={removeItem}
          />
        }
      </div>
    </div>
  )
}
