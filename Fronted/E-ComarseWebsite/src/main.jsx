import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './Context/Context.jsx'
import { UserProvider } from './Context/UserContext';

import {FilterContextProvider} from './Context/Filter_product.jsx';
import { CartProvider } from './Context/cart_context';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
      <UserProvider>
       <CartProvider>
       <App />
       </CartProvider>
       </UserProvider>,
      </FilterContextProvider>
   </AppProvider>
  
     

  </React.StrictMode>,
)
