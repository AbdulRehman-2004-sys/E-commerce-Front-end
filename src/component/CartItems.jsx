import React from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import Item from './Item';
const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}= React.useContext(ShopContext)
  return (
    <div>
      <section className='bg-white mt-[5rem]'>
      <div className='w-[80%] mx-auto flex flex-col md:flex-row gap-8'>
            <div className='w-[40%] flex gap-10 md:gap-16'>
                <p className='font-bold'>Products</p>
                <p className='font-bold'>Title</p>
            </div>
            <div className='w-[60%] flex gap-10 justify-between'>
                <p className='font-bold'>Price</p>
                <p className='font-bold'>Qunatity</p>
                <p className='font-bold'>Total</p>
                <p className='font-bold'>Remove</p>
            </div>
        </div>
        <hr className='w-[80%] mx-auto rounded-sm bg-black '/>
        {
            all_product.map((e,i)=>{
                if(cartItems[e.id]>0){
                    return(
                    <div>
                        <div key={i} className='w-[80%] mx-auto flex flex-col md:flex-row gap-12 py-4'>
                            <div className='flex gap-8'>
                            <img className='h-[5rem]' src={e.image} alt="" />
                            <p className='md:w-[100%] lg:w-[60%] ml-3 w-[65%]'>{e.name}</p>
                            </div>

                            <div className='flex w-[100%] lg:w-[72%] justify-between items-center pr-6'>
                            <p>${e.new_price}</p>
                            <button className='border border-gray-400 py-1 px-3'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className='h-3' onClick={()=>{removeFromCart(e.id)}} src="./../../public/images/cart_cross_icon.png" alt="" />
                            </div>
                        </div>
                        <hr className='w-[80%] mx-auto rounded-sm bg-black'/>
                    </div>
                )
                }
                return null;
            })
        }
        <div className='flex flex-col md:flex-row md:justify-between w-[80%] mx-auto mt-[7rem] mb-[5rem]'>
            <div className='flex flex-col mb-8 md:w-[40%] w-[100%] gap-4'>
                <Link to={"/checkout"}>
                     <button className='bg-red-600 text-white px-4 py-2 uppercase'>PROCEEd TO CHECKOUT</button>
                </Link>
            </div>
        </div>
      </section>
      {/* <!-- component --> */}
    </div>
  )
}
// This is called in Cart.jsx
export default CartItems
