import React from 'react'
import type { Metadata } from 'next'
import styles from './page.module.css'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import superfast from '@/public/superfast.png'
import airbnb from '@/public/airbnb.png'


type Props = {}

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Superfast | Products',
  description: 'Superfast products from a superfast website',
}



const Product = (props: Props) => {
  return (
    <div>
    <h1 className='mt-32 text-center text-2xl'>Our Products</h1>
    <div className='flex flex-col items-center mt-10 gap-y-5 mb-20 lg:flex lg:flex-row lg:justify-center lg:mx-5 lg:gap-5'>
      <div className={ `${styles.item} transition duration-500 ease-in-out` }>
        <Image 
            src={superfast} 
            alt='header image' 
            fill={ true } 
            className='object-contain'
            placeholder='blur'
        />
        <span className='absolute top-[10px] left-[30px] md:right-[15px] text-3xl md:text-xl font-bold'>3 Page Website</span>
      </div>
      <div className={ `${styles.item} transition duration-500 ease-in-out` }>
      <Image 
            src={airbnb} 
            alt='header image' 
            fill={ true } 
            className='object-contain'
            placeholder='blur'
        />
        <span className='absolute top-[10px] left-[30px] md:right-[10px] text-3xl md:text-xl font-bold'>Web Applications</span>
      </div>
    </div>
  </div>
  )
}

export default Product