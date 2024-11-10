import React from 'react'
import { ShopContext } from '../../Context/ShopContext'
import all_product from '../assets/all_product'
import { Link } from 'react-router-dom'

const OrdersItem = () => {
    const {removeFromCart}= React.useContext(ShopContext)

  return (
    <div>
       <section className='mt-[2rem]'>
        <div className='w-[80%] mx-auto flex flex-col md:flex-row gap-8'>
            <div className='w-[40%] flex gap-10 md:gap-16'>
                <p className='font-bold text-2xl whitespace-nowrap'>Oders Page</p>
            </div>
        </div>
        <hr className='w-[80%] mx-auto rounded-sm bg-black'/>
        {
            all_product.slice(1,5).map((e,i)=>{
                
                    return(
                    <div>
                        <div key={i} className='w-[80%] mx-auto flex flex-col md:flex-row gap-12 py-4'>
                            <div className='flex gap-8'>
                            <img className='h-[5rem]' src={e.image} alt="" />
                            <p className='md:w-[100%] lg:w-[60%] ml-3 w-[65%]'>{e.name}</p>
                            </div>
                            <div>
                                <p className='font-bold'>Customer Address:</p>
                                <h1>Abdul Rehman</h1>
                                <p>Phone Number: 0300-1234567</p>
                                <p className='w-full whitespace-wrap'>HouseBIII213734535553/Street45465/Pakistan</p>
                                <p>abcdefg12345@gmail.com</p>
                            </div>
                            <div className='flex w-[100%] lg:w-[72%] justify-between items-center pr-6'>
                            <p>${e.new_price}</p>
                            <img className='h-3' onClick={()=>{removeFromCart(e.id)}} src="./../../public/images/cart_cross_icon.png" alt="" />
                            </div>
                        </div>
                        <hr className='w-[80%] mx-auto rounded-sm bg-black'/>
                    </div>
                )
                
                return null;
            })
        }
      </section>
    </div>
  )
}

export default OrdersItem
