import React from 'react'
import './App.css'
import {Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Shop from './component/Shop';
import ShopCatogery from './component/ShopCatogery';
import LoginSignup from './component/LoginSignup';
import Product from './component/Product';
import Cart from './component/Cart';
import Footer from './component/Footer';
import men_banner from './../public/images/banner_mens.png'
import women_banner from './../public/images/banner_women.png'
import kid_banner from './../public/images/banner_kids.png'
import PlaceOrder from './component/PlaceOrder';
import Orders from './component/Orders';
import LocomotiveScroll from 'locomotive-scroll';
import Pro_prac from './component/Pro_prac';
import AdimnDashboard from './component/Admin/AdminDashboard';
import AddItem from './component/Admin/AddItem';
import ItemsList from './component/Admin/ItemsList';
import OrdersItem from './component/Admin/OrdersItem';
import ProductDisplay from './component/ProductDisplay';
import OurProducts from './component/OurProducts';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/men" element={<ShopCatogery banner={men_banner} category="men"/>} />
          <Route path="/women" element={<ShopCatogery banner={women_banner} category="women"/>} />
          <Route path="/kids" element={<ShopCatogery banner={kid_banner} category="kid"/>} />
          <Route path="/ourPorducts" element={<OurProducts/>} />
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>} />
          </Route>
          <Route path="/cart" element={<Cart/>} />
          {/* <Route path="/productDisplay" element={<ProductDisplay/>} /> */}
          <Route path="/checkout" element={<PlaceOrder/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/login" element={<LoginSignup/>} />
          <Route path="/latestCollection" element={<Pro_prac/>} />
          <Route path="/admin" element={<AdimnDashboard/>} />
          <Route path="/additem" element={<AddItem/>} />
          <Route path="/itemlist" element={<ItemsList/>} />
          <Route path="/orderpages" element={<OrdersItem/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>


    
    
    
    
        
      {/* <Provider store={store}>
      </Provider> */}
    </>

  )
}

export default App
