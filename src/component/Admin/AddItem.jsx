import React from 'react'
const AddItem = () => {

  return (
    <div>
      <section className='mt-[5rem]'>
        <div className='w-[100%] md:w-[90%] mx-auto p-1 overflow-x-hidden'>
            <div>
                <h1 className='text-2xl font-bold mb-4'>Upload Images</h1>
                <div className='md:flex'>
                    <input type="file" />
                    <input type="file" />
                    <input type="file" />
                    <input type="file" />
                </div>

                <form action="" className='w-full mt-10'>
                    <label htmlFor="" className='text-1xl font-bold'>Product Name:</label>
                    <input className='mb-5 w-[100%] h-10 outline-none border border-black pl-3' type="text" placeholder='Product Name'/>
                    <br />
                    <label htmlFor="" className='text-1xl font-bold'>Old Price:</label>
                    <input className='mb-5 w-[100%] h-10 outline-none border border-black pl-3' type="number" placeholder='Product Name'/>
                    <br />
                    <label htmlFor="" className='text-1xl font-bold'>New Price:</label>
                    <input className='mb-5 w-[100%] h-10 outline-none border border-black pl-3' type="number" placeholder='Product Name'/>
                    <label htmlFor="" className='text-1xl font-bold'>Product Description:</label>
                    <textarea className='w-[100%] h-[10rem] outline-none border border-black pl-3' type="text" placeholder='Description'/>
                    <br />
                    <button className='bg-black text-white px-4 py-2 rounded mt-4'>Add</button>
                </form>
            </div>
        </div>
          
      </section>
    </div>
  )
}

export default AddItem
