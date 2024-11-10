import React from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'
const PlaceOrder = () => {
    const {getTotalCartAmount,getTotalCartItems}= React.useContext(ShopContext)
    const [method,setMethod] = React.useState('cod')
    const [itemCount,setitemCount] = React.useState(getTotalCartItems())
  return (
    <div>
        <section className='w-full h-[85vh] mt-[1rem] px-[5rem] flex flex-col gap-12 items-center lg:items-left lg:flex-row mb-[25rem]  md:mb-[3rem]'>
            <div className="lg:w-[50%] w-[100%] flex flex-col items-center lg:items-left">
                <h1 className='text-3xl uppercase'>DELIVery <span className='font-bold'>Information</span></h1>
                <form action="" className='mt-8 flex flex-col'>
                    <div className='flex gap-4'>
                        <input className='w-[50%] h-10 outline-none border border-black pl-3' type="text" placeholder='First Name'/>
                        <input className='w-[50%] h-10 outline-none border border-black pl-3' type="text" placeholder='Last Name'/>
                    </div>
                    <br />
                    <input className='w-[100%] h-10 outline-none border border-black pl-3' type="email" placeholder='Email Address'/>
                    <br />
                    <input className='w-[100%] h-10 outline-none border border-black pl-3' type="text" placeholder='street'/>
                    <br />
                    <div className='flex gap-4'>
                        <input className='w-[50%] h-10 outline-none border border-black pl-3' type="text" placeholder='city'/>
                        <input className='w-[50%] h-10 outline-none border border-black pl-3' type="text" placeholder='state' />
                    </div>                       
                    <br />
                    <div className='flex gap-4'>
                        <input className='w-[50%] h-10 outline-none border border-black pl-3' type="number" placeholder='Zipcode'/>
                        <input className='w-[50%] h-10 outline-none border border-black pl-3' type="text" placeholder='Country'/>
                    </div>
                    <br />
                    <input className='w-[100%] h-10 outline-none border border-black pl-3' type="number" placeholder='Phone'/>
                </form>
            </div>

            <div className='flex flex-col items-center lg:w-[50%] w-[100%]'>
                <div className='flex flex-col w-[80%] lg:w-[40%] gap-4'>
                    <h1 className='text-3xl font-bold uppercase text-center lg:text-left'>cart Totals</h1>
                    <div>
                        <div className='flex justify-between py-4'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='flex justify-between py-4'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='flex justify-between py-4'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center w-[60%] md:w-[40%] gap-8 mt-4'>
                    <h1 className='uppercase text-1xl font-bold'>Payment Method</h1>
                    <div className='flex gap-2'>
                        <div onClick={() => setMethod('stripe')} className='flex items-center px-3 gap-2 w-[6rem] md:w-[10rem] h-[2rem] border border-black cursor-pointer'>
                            <div className={`w-3 h-3 rounded-full border border-black ${method === 'stripe' ? "bg-green-500" : " "}`}></div>
                            Payment1
                        </div>
                        <div onClick={() => setMethod('razorpay')} className='flex items-center px-3 gap-2 w-[8rem] md:w-[10rem] h-[2rem] border border-black cursor-pointer'>
                            <div className={`w-3 h-3 rounded-full border border-black ${method === 'razorpay' ? "bg-green-500" : " "}`}></div>
                            Payment2
                        </div>
                        <div onClick={() => setMethod('cod')} className='flex items-center px-3 gap-2 whitespace-nowrap w-[11rem] md:w-[12rem] lg:w-[25rem] h-[2rem] border border-black cursor-pointer'>
                            <div className={`w-3 h-3 rounded-full border border-black ${method === 'cod' ? "bg-green-500" : " "}`}></div>
                            Cash on delivery
                        </div>
                    </div>
                    <Link to={"/orders"}>
                        <button onClick={() => setitemCount(itemCount.null)} className='w-56 flex justify-center items-center gap-6 bg-red-600 h-10 text-white'>Place Order</button>
                    </Link>
                </div>
            <div>
        </div>
            </div>
        </section>
    </div>
  )
}
// Porceed to checkout
export default PlaceOrder
