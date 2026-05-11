import { NavLink } from 'react-router';

function ItemCard({ itemName, price }) {
    return (
        <div className="itemCard" style={{ border: '1px solid black ', padding: '10px' }}>
            <div>
                {/* <img src={imageSrc} alt={itemName} /> */}
            </div>
            <div>
                <p>{itemName}</p>
                <p>£{price}</p>
                <span className="toggleQuantity" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid black' , margin: '0', padding: '0' }}>
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </span>
                <button style={{ justifySelf: 'center'}}>Add to cart</button>
            </div>
        </div>
    )
}

export function MainContent({ items }) {
    return (
        <div className="main-content">
            {
                items.map(item => (
                    <ItemCard
                        key={item.id}
                        // imageSrc={item.imageSrc}
                        itemName={item.title}
                        price={item.price}
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

export function Navbar() {
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
                    <NavLink to={'/cart'} className={({ isActive }) => isActive && 'active-link'}>Cart</NavLink>
                </div>
        </header>
    )
}