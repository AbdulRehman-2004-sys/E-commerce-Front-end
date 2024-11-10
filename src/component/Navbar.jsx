import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import { ShopContext } from '../Context/ShopContext';
import { ShopContext } from '../Context/ShopContext';
import { MdOutlineShoppingCart } from "react-icons/md";
import { withRouter } from './WithRouter';

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 

const Navbar = ({location}) => {
  const hideNavbar = location.pathname === '/login'
  const hideAdminNavbar = location.pathname === '/admin'
  const hideAdditemNav = location.pathname === '/additem'
  const hideListitemNav = location.pathname === '/itemlist'
  const hideOrderPageNav = location.pathname === '/orderpages'
  const hideCart = location.pathname === '/cart'
  const hideContact= location.pathname === '/contactus'
  const hideCheckout= location.pathname === '/checkout'
  const hideOdersHistory= location.pathname === '/orders'

  if(hideNavbar) {return null}
  if(hideAdminNavbar) {return null}
  if(hideAdditemNav) {return null}
  if(hideListitemNav) {return null}
  if(hideOrderPageNav) {return null}
  if(hideCart) {return null}
  if(hideContact) {return null}
  if(hideCheckout) {return null}
  if(hideOdersHistory) {return null}

  const {getTotalCartItems} = useContext(ShopContext);

  const [isOpen, setIsOpen] = useState(false);
    const [menuLine, setMenuLine] = useState("shop");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const container = useRef();
  useGSAP(() => {
      gsap.to(".navbar", {
        background: "#040629",
        color: "white",
        duration: 1.5,
        scrollTrigger: {
          trigger: ".item-container",
          start: "15% 50%",
          end: "20% 50%",
          scrub: 1,
        }
      })
      gsap.to(".navbar a, .navbar cart_icon", {
        color: "white",
        duration: 1.5,
        scrollTrigger: {
          trigger: ".item-container",
          start: "10% 50%",
          end: "20% 50%",
          scrub: 1,
        }
      })
      gsap.to(".cart_icon,svg", {
        color: "white",
        duration: 1.5,
        scrollTrigger: {
          trigger: ".item-container",
          start: "10% 50%",
          end: "20% 50%",
          scrub: 1,
        }
      })
  }, { scope: container });

  return (
    <div ref={container} className='.item-container'>
      <nav className="navbar bg-zinc-600 px-5 md:px-[5rem] py-3 fixed top-0 left-0 z-50 w-full">
      <div className="w-full h-16 flex justify-between items-center ">
      {/* logo */}
        <Link to={"/"} className="text-black flex items-center gap-2">
        <img className='h-9 lg:h-14' src="images/logo.png" alt="" />
            <h2 className='font-bold text-1xl md:text-2xl'>ShopNow</h2>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to={"/"} className="text-black font-bold hover:underline hover:text-cyan-700 duration-300">Home</Link>
          <Link to={"/ourPorducts"} className="text-black font-bold hover:underline duration-300">Products</Link>
        </div>
        <div className='flex gap-3 items-center mr-[-5rem] md:mr-0'>
        <Link to={"/admin"} className="text-red-600 hidden md:block font-bold border border-red-600 text-sm md:text-1xl  px-2 py-1 md:px-4 md:py-2">Admin Panel</Link>
        <Link to={"/login"} className="text-white text-sm md:text-1xl bg-red-700 px-2 py-1 md:px-4 md:py-2">Login</Link>
          <Link to={"/cart"}>
          <MdOutlineShoppingCart className='text-4xl text-black cart_icon'/>
          </Link>
          <div className='text-white bg-red-700 w-4 h-4 md:w-5 md:h-5 text-[11px] md:text-[13px] flex justify-center items-center rounded-full ml-[-20px] mt-[-20px] md:mt-[-20px]'>{getTotalCartItems()}</div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="dark:text-white text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* menu */}
      <div className={`md:hidden bg-black  flex flex-col gap-[1rem] translate-x-[-110%] transition-all duration-300 ease-in-out ${isOpen ? 'h-screen translate-x-[0%] transition-all duration-300 ease-in-out ' : 'max-h-0 overflow-hidden'}`}>
          <Link to={"/"} className="text-white text-3xl p-8 font-bold hover:underline hover:text-cyan-700 duration-300">Home</Link>
          <Link to={"/ourPorducts"} className="text-white text-3xl p-8 font-bold hover:underline duration-300">Products</Link>
      </div>
    </nav>
    </div>
  );
};

export default withRouter(Navbar);
