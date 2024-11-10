// src/components/Dashboard.js
import React from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdFormatListBulleted } from "react-icons/md";
import { RxBorderStyle } from "react-icons/rx";
import { Link } from 'react-router-dom';
import AddItem from './AddItem';
import ItemsList from './ItemsList';
import Orders from '../Orders';
import OrdersItem from './OrdersItem';

const AdimnDashboard = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col bg-gray-100">
      {/* Header */}
      <header className="border-b border-black w-full text-white p-4 flex justify-between px-[5rem]">
      <div className="text-black flex items-center gap-2">
        <img className='h-9 lg:h-14' src="images/logo.png" alt="" />
            <h2 className='font-bold text-1xl md:text-2xl'>ShopNow</h2>
        </div>
        <button className='bg-red-500 text-white px-4 py-2 rounded'>Logout</button>
      </header>

      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-16 p-4 h-screen fixed left-0">
        <nav>
          <ul>
            <li className="mb-2"><Link to={'/additem'} className="block p-2 text-white text-2xl"><IoMdAddCircleOutline /></Link></li>
            <li className="mb-2"><Link to={'/itemlist'} className="block p-2 text-white text-2xl"><MdFormatListBulleted /></Link></li>
            <li className="mb-2"><Link to={'/orderpages'} className="block p-2 text-white text-2xl"><RxBorderStyle /></Link></li>
            {/* Add more menu items as needed */}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex justify-center items-center flex-1 ml-[4rem] mt-[2rem]">
        <h1 className='text-7xl font-bold text-gray-600'>Welcome To Dashboard</h1>
      </main>
    </div>
  );
};

export default AdimnDashboard;
