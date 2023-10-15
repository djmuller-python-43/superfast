import Image from 'next/image'
import Link from 'next/link'
import logo from "@/public/logo.svg";


const Footer = () => {
  return (
    <div className='h-[50px] max-w-screen-2xl mx-auto text-sm text-center'>
      <div>&copy; { new Date().getFullYear() } Duane Muller Web Design All Rights Reserved.</div>
      <div className='pl-8 pt-1 sm:flex sm:items-center sm:gap-2 md:pr-6'>
        <Link href='https://www.facebook.com/duanemullerwebdesign' rel="noopener noreferrer" target="_blank" className='mb-10 md:mb-2'>
          <Image src='/1.png' width={15} height={15} alt='Duane Muller Web Design Facebook Account' className='opacity-60 cursor-pointer'/>
        </Link>
        <Link href='https://www.instagram.com/itboffin/' rel="noopener noreferrer" target="_blank" className='mb-10 md:mb-2'>
          <Image src='/2.png' width={28} height={28} alt='Duane Muller Web Design Facebook Account' className='opacity-60 cursor-pointer'/>
        </Link>
        <div className="elfsight-app-a9240789-09ec-4dae-b1c2-2184a8f0081c"></div>
      </div>
    </div>
  )
}

export default Footer