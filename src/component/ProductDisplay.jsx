import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div>
      <section className='flex flex-col md:flex-row gap-8 md:px-[1rem] lg:px-[10rem] mb-[5rem]'>
        <div className="flex gap-2">
            <div className='flex flex-col gap-[0.7rem]'>
                <img className='h-[6rem] w-[8rem]' src={product.image} alt="" />
                <img className='h-[6rem] w-[8rem]' src={product.image} alt="" />
                <img className='h-[6rem] w-[8rem]' src={product.image} alt="" />
                <img className='h-[6rem] w-[8rem]' src={product.image} alt="" />
            </div>
            <div>
                <img className='h-[26rem] w-[35rem]' src={product.image} alt="" />
            </div>
        </div>
        <div className="px-4 md:px-0">
            <h1 className='text-3xl font-bold mb-4 text-justify'>{product.name}</h1>
            <div className='flex items-center gap-2'>
            <div className='flex'>
                <img src="/images/star_icon.png" alt="" />
                <img src="/images/star_icon.png" alt="" />
                <img src="/images/star_icon.png" alt="" />
                <img src="/images/star_icon.png" alt="" />
                <img src="/images/star_dull_icon.png" alt="" />
            </div>
                <p className='h-5'>(122)</p>
            </div>
            <div className='flex gap-4 mt-4'>
                <div className='text-gray-500 line-through text-2xl'>
                    ${product.old_price}
                </div>
                <div className='text-red-600 font-bold text-2xl'>
                    ${product.new_price}
                </div>
            </div>
            <div className='mt-4'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='mt-4'>
                <h1 className='text-1xl font-bold'>Select Size</h1>
                <p className='text-gray-500'>Choose a size.In Order to add your selected size in cart.</p>
                <div className='flex gap-4 mt-4'>
                    <div onClick={() => addToCart(product.id)} className='cursor-pointer bg-gray-100 py-2 px-3 border border-black'>S</div>
                    <div onClick={() => addToCart(product.id)} className='cursor-pointer bg-gray-100 py-2 px-3 border border-black'>M</div>
                    <div onClick={() => addToCart(product.id)} className='cursor-pointer bg-gray-100 py-2 px-3 border border-black'>L</div>
                    <div onClick={() => addToCart(product.id)} className='cursor-pointer bg-gray-100 py-2 px-3 border border-black'>XL</div>
                    <div onClick={() => addToCart(product.id)} className='cursor-pointer bg-gray-100 py-2 px-3 border border-black'>XXL</div>
                </div>
            </div>
            {/* <button onClick={() => addToCart(product.id)} className='bg-red-500 text-white px-4 py-2 rounded mt-4'>ADD TO CART</button> */}
            <p className='mt-4'><span className='font-bold'>Category : </span>Women, T-Shirt, Crop top</p>
            <p className='mt-4'><span className='font-bold'>Tags : </span>Modern, Latest, Trending</p>
        </div>
      </section>
    </div>
  )
}

export default ProductDisplay
