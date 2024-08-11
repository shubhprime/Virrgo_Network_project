import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './page/Home/home.jsx';
import Service1 from './page/Services/service1/service1.jsx';
import Service2 from './page/Services/service2/service2.jsx';
import Service3 from './page/Services/service3/service3.jsx';
import Service4 from './page/Services/service4/service4.jsx';
import Product1 from './page/Products/product1/product1.jsx';
import Product2 from './page/Products/product2/product2.jsx';
import Product3 from './page/Products/product3/product3.jsx';
import About from './page/About/about.jsx';
import Contact from './page/Contact/contact.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='service1' element={<Service1 />} />
      <Route path='service2' element={<Service2 />} />
      <Route path='service3' element={<Service3 />} />
      <Route path='service4' element={<Service4 />} />
      <Route path='product1' element={<Product1 />} />
      <Route path='product2' element={<Product2 />} />
      <Route path='product3' element={<Product3 />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
