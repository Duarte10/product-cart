import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

import "./index.css";
import ProductList from "./products/product-list";
import ProductDetail from "./products/product-detail";
import Cart from "./products/cart";
import ICartItem from "./interfaces/ICartItem";
import { Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export const CartContext = createContext<{
  cartItems: ICartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<ICartItem[]>>;
} | null>(null);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

function App() {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  return (
    <BrowserRouter>
    <nav>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </nav>
      
      <CartContext.Provider value={{ cartItems, setCartItems }}>
      <Routes>
        <Route path="/" element={<ProductList />}/>
        <Route path="/product/:id" element={<ProductDetail />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}
