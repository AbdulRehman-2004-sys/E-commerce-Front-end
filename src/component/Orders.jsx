import React from 'react'
import { ShopContext } from '../Context/ShopContext';
const Orders = () => {

  const {all_product,getTotalCartItems,getTotalCartAmount,cartItems}  = React.useContext(ShopContext);
  return (
    <div>
      <section className='pt-4 my-[5rem] px-[5rem]'>
        <div >
          <h1 className='text-4xl '>My Orders <span className='font-bold'>History</span></h1>
        </div>
        <div>
          {
            all_product.map((item,i)=>
            {
              if(cartItems[item.id] > 0)
              {

              return(
                <div key={i} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                  <div className='flex items-start gap-4 text-sm'>
                  <img className='w-16 sm:w-20' src={item.image} alt="" />
                  <div>
                    <p className='sm:text-base font-medium'>{item.name}</p>
                    <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                      <p  className='text-lg'>${item.new_price*cartItems[item.id]}</p>
                      <p>Quantity: {cartItems[item.id]}</p>
                      {/* <p>Size: M</p> */}
                    </div>
                    <p className='mt-2'>Date: <span>{Date.now()}</span></p>
                  </div>
                  </div>

                  <div className='md:w-1/2 flex justify-between'>
                  <div className='flex items-center gap-3'>
                    <p className='rounded-full h-2 min-w-2 bg-green-500'></p>
                    <p className='text-lg font-medium'>Ready To Ship</p>
                  </div>
                  <button className='border text-sm font-medium rounded-full'>Track Order </button>
                  </div>
                </div>
                
              )
          }

            })

          }
        </div>
      </section>
    </div>
  )
}
// Order history page
export default Orders
