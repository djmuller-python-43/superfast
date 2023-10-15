import Image from 'next/image'
import Lightning from 'public/lightning.png'
import Button from './(shared)/Button'


export default function Home() {
  return (
   <div className='max-w-screen-2xl mx-auto mt-20 p-5 pt-10 text-center md:flex md:items-center md:gap-5 md:text-left lg:gap-12 z-0'>
    <div className='md:flex-1 md:flex md:flex-col md:gap-5 lg:gap-12 '>
      <h1 className='text-5xl mb-1 font-bold
      bg-clip-text text-transparent bg-gradient-to-b from-[#f206bf] to-[#daaed6] md:text-7xl md:mb-0 lg:text-7xl xl:text-8xl'>SUPERFAST WEBSITES</h1>
      <h2 className='text-2xl mb-1 font-light md:text-3xl md:mb-0 lg:text-4xl'>Not only loads fast, but builds fast too. </h2>
      <p className='md:text-lg mb-1 md:mb-0 lg:text-xl'>Opens in a blink of an eye. You want a superfast website?</p>
      <p className='md:text-lg mb-1 md:mb-0 lg:text-xl'>Click the button below</p>
      <Button url='https://www.duanemullerwebdesign.co.za/contact' text='Get Superfast  Website'/>
    </div>
    <div className='md:flex-1 md:flex md:flex-col md:gap-5'>
      <Image src={ Lightning } className='mt-5 w-full img rounded-lg' alt='Good looking guy with a beard and glasses'/>
    </div>
  </div>
  )
}
