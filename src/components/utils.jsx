import { NavLink } from 'react-router';

function ItemCard({ id, title, price, category, imageSrc, onClick }) {
    return (
        <div className="item-card" style={{ border: '1px solid black ', padding: '10px' }}>
            <div>
                <img src={imageSrc} alt={title} />
            </div>
            <div>
                <p>{title}</p>
                <p>£{price}</p>
                <span className="toggleQuantity" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid black' , margin: '0', padding: '0' }}>
                    <button>-</button>
                    <input type="number" name="item-count" id="item-count" />
                    <button>+</button>
                </span>
                <button onClick={() => onClick(id, title, price, category, imageSrc)} style={{ justifySelf: 'center'}}>Add to cart</button>
            </div>
        </div>
    )
}

export function MainContent({ products, onClick }) {
    return (
        <div className="main-content">
            {
                products.map(product => (
                    <ItemCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        category={product.category}
                        imageSrc={product.image}
                        onClick={onClick}
                    />
                ))
            }
        </div>
    )
}

export function ShopNavbar() {
    return (
    <nav>
        <NavLink to={'.'} end className={({ isActive }) => isActive && 'active-link'}>All</NavLink>
        <NavLink to={'mens'} className={({ isActive }) => isActive && 'active-link'}>Men's Clothing</NavLink>
        <NavLink to={'womans'} className={({ isActive }) => isActive && 'active-link'}>Woman's Clothing</NavLink>
        <NavLink to={'electronics'} className={({ isActive }) => isActive && 'active-link'}>Electronics</NavLink>
        <NavLink to={'jewelry'} className={({ isActive }) => isActive && 'active-link'}>Jewelry</NavLink>
    </nav>
    )
}

export function Navbar({ cartItems }) {
    return (
        <header style={{
            border: '2px solid black',
            display: 'flex',
            // alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 10px 0 10px'
        }}>
            <span>
                <h1>Shopping Cart</h1>
            </span>
            <nav style={{
                border: '1px solid red',
                display: 'flex',
                justifyContent: 'space-between',
                justifySelf: 'center',
                alignSelf: 'center'
            }}>
                <NavLink to={'/'} className={({ isActive }) => isActive && 'active-link'}>Home</NavLink>
                <NavLink to={'/shop'} className={({ isActive }) => isActive && 'active-link'}>Shop</NavLink>
            </nav>
                <div style={{
                    justifySelf: 'flex-end'
                }}>
                    <NavLink to={'/cart'} className={({ isActive }) => isActive && 'active-link'}>Cart {cartItems && cartItems }</NavLink>
                </div>
        </header>
    )
}