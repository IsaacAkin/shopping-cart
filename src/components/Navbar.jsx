import { Link } from "react-router";

export default function Navbar() {
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
                <Link to={'/'}>Home</Link>
                <Link to={'/shop'}>Shop</Link>
            </nav>
                <div style={{
                    justifySelf: 'flex-end'
                }}>
                    <Link to={'/cart'}>Cart</Link>
                </div>
        </header>
    )
}