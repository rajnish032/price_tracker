import React from 'react'
import Image from 'next/image';
import Searchbar from '@/components/Searchbar';
import HeroCarousel from '@/components/HeroCarousel';
import { getAllProducts, } from '@/lib/actions';
import ProductCard from '@/components/ProductCard';
const Home = async () => {
   const allProducts = await getAllProducts();

  return (
    <>
      <section className='px-6 md:px-20 py-24'>
         <div className='flex max-xl:flex-col gap-16'>
           <div className='flex flex-col justify-center'>
            <p className='flex gap-2 text-sm font-medium text-red-600'>
              Smart Shopping start here:
              <Image
              src= "/assets/icons/arrow-right.svg"
              alt='arrow-right'
              width={16}
              height={16}
              />
            </p>
            <h1 className='mt-4 text-6xl leading-[72px] font-bold tracking-[-1.2px] text-gray-900'>
              Unleash the Power of <span className='text-red-700'>PriceWise</span>
            </h1>
            <p className='mt-6'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more</p>
            <Searchbar />
           </div>
           <HeroCarousel />
         </div>

        <section className='flex flex-col gap-10 px-6 md:px-20 py-24'>
          <h2 className='text-gray-700 text-[32px] font-semibold'>Trending</h2>

          <div className='flex flex-wrap gap-x-32 gap-y-16'>
           { allProducts?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </section>
           
      </section>
    </>
  )
}

export default Home;
