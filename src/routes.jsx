import { createBrowserRouter } from "react-router";
import Home from './components/Home.jsx';
import Shop from './components/Shop.jsx';
import ShopHome from "./components/ShopHome.jsx";
import Mens from './components/Mens.jsx';
import Womans from './components/Womans.jsx';
import Technology from './components/Technology.jsx';
import Jewelry from './components/Jewelry.jsx';
import Cart from './components/Cart.jsx';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
    },
    {
        path: 'shop',
        Component: Shop,
        children: [
            { index: true, Component: ShopHome },
            { path: 'mens', Component: Mens },
            { path: 'womans', Component: Womans },
            { path: 'technology', Component: Technology },
            { path: 'jewelry', Component: Jewelry }
        ]
    },
    {
        path: 'cart',
        Component: Cart
    }
]);