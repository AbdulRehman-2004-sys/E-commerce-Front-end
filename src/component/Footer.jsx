import React from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from './WithRouter';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = ({location}) => {
  const hideFooter = location.pathname === '/login'
  const hideAdminFooter = location.pathname === '/admin'
  const hideAdditemFooter = location.pathname === '/additem'
  const hideListitemFooter = location.pathname === '/itemlist'
  const hideOrderPageFooter = location.pathname === '/orderpages'
  const hideCart = location.pathname === '/cart'
  const hideContact= location.pathname === '/contactus'
  const hideCheckout= location.pathname === '/checkout'
  const hideOdersHistory= location.pathname === '/orders'
  if(hideFooter) {return null} 
  if(hideAdminFooter) {return null} 
  if(hideAdditemFooter) {return null}
  if(hideListitemFooter) {return null}
  if(hideOrderPageFooter) {return null}
  if(hideCart) {return null}
  if(hideContact) {return null}
  if(hideCheckout) {return null}
  if(hideOdersHistory) {return null}
  return (
    <div>
      

<footer class=" dark:bg-gray-900" style={{background: "#040629"}}>
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src="images/logo.png" class="h-8 me-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">ShopNow</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div className='text-white'>
                  <h2 class="mb-6 text-sm font-semibold uppercase ">Shopping & Categories</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-2">
                          <Link to={'/men'} classNameass="hover:underline hover:text-cyan-700 cursor-pointer duration-300">Men's Shopping</Link>
                      </li>
                      <li class="mb-2">
                          <Link to={'/women'}  class="hover:underline hover:text-cyan-700 cursor-pointer duration-300">Women's Shopping</Link>
                      </li>
                      <li>
                          <Link to={'/kids'}  class="hover:underline hover:text-cyan-700 cursor-pointer duration-300">Kid's Shopping</Link>
                      </li>
                  </ul>
              </div>
              <div className='text-white'>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase ">Usefull Links</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline  hover:text-cyan-700 cursor-pointer duration-300">About Us</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline hover:text-cyan-700 cursor-pointer duration-300">Contact Us</a>
                      </li>
                  </ul>
              </div>
              <div className='text-white'>
                  <h2 class="mb-6 text-sm font-semibold uppercase text-white">Help & Information</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline hover:text-cyan-700 cursor-pointer duration-300">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline hover:text-cyan-700 cursor-pointer duration-300">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to={"/"} class="hover:underline hover:text-cyan-700 cursor-pointer duration-300">ShopNow</Link>. All Rights Reserved.
          </span>
          <div class="flex gap-4 mt-4 sm:justify-center sm:mt-0">
            <FaFacebookF className='text-1xl text-white hover:text-cyan-700 cursor-pointer duration-300'/>
            <FaInstagram className='text-1xl text-white hover:text-cyan-700 cursor-pointer duration-300'/>
            <FaLinkedinIn className='text-1xl text-white hover:text-cyan-700 cursor-pointer duration-300'/>
            <FaTwitter className='text-1xl text-white hover:text-cyan-700 cursor-pointer duration-300'/>
          </div>
      </div>
    </div>
</footer>

    </div>
  )
}

export default withRouter(Footer)
