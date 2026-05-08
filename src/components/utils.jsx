import { NavLink } from 'react-router';

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