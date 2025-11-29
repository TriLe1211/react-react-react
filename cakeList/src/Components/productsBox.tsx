import { ProductItem } from '../Components/productItems'
import productsData from '../data/cake.js'
import React, { useState } from 'react';

export function ProductsBox() {
  const [searchItems, setSearchItems] = useState(productsData);

  const handleSearch = (category) => {
    if (category === 'all') {
      setSearchItems(productsData);
    } else {
      const filtered = productsData.filter(item => item.category.toLowerCase() === category.toLowerCase());
      setSearchItems(filtered);
    }
  }

  return (
    <div className="w-4/5 h-[600px] rounded-lg shadow-md p-10 bg-[#F2EBBF] flex flex-col justify-start items-center gap-3">
      <div className="title text-3xl font-bold text-[#F06060]">PRODUCTS LIST</div>

      <div className='buttonSearch flex flex-row gap-4 mb-4'>
        <button 
          className='bg-[#F06060] w-24 h-10 text-white px-4 py-2 rounded-md hover:bg-[#d94c4c] transition'
          onClick={() => handleSearch('bread')}
        >Bread</button>
        <button 
          className='bg-[#F06060] w-24 h-10 text-white px-4 py-2 rounded-md hover:bg-[#d94c4c] transition'
          onClick={() => handleSearch('cake')}
        >Cake</button>
        <button 
          className='bg-[#F06060] w-24 h-10 text-white px-4 py-2 rounded-md hover:bg-[#d94c4c] transition'
          onClick={() => handleSearch('pastry')}
        >Pastry</button>
        <button 
          className='bg-[#F06060] w-24 h-10 text-white px-4 py-2 rounded-md hover:bg-[#d94c4c] transition'
          onClick={() => handleSearch('cookie')}
        >Cookie</button>
        <button 
          className='bg-[#F06060] w-24 h-10 text-white px-4 py-2 rounded-md hover:bg-[#d94c4c] transition'
          onClick={() => handleSearch('donut')}
        >Donut</button>
        <button 
          className='bg-gray-400 w-24 h-10 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition'
          onClick={() => handleSearch('all')}
        >All</button>
      </div>

      <div className="productList w-[90%] h-full rounded-lg p-4 overflow-auto  
                      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
        {searchItems.map((cake) => (
          <ProductItem
            key={cake.id}
            name={cake.name}  
            category={cake.category}
            desc={cake.desc}
            price={cake.price}
            image={cake.image}
          />
        ))}
      </div>
    </div>
  );
}
