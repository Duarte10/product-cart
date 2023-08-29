import React from 'react'
import ReactDOM from 'react-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import ProductList from './products/product-list';

const router = createBrowserRouter([
  {
    path: "/products",
    element: <ProductList />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
)
