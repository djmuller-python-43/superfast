import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/app/(shared)/Button';


export const metadata = {
  title: 'Superfast| About',
  description: 'This is about the superfast 3 page website that Duane Muller Web Design is offering',
}

const About = () => {
  return (
    <div className='max-w-screen-2xl mx-5 lg:mx-10 xxl:mx-auto mt-32'>
      <div className={ styles.imgContainer }>
        <Image src='https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='header image' fill={ true } className={ styles.img }/>
        <div className='absolute top-[20px] left-[30px]'>
          <h1 className='text-3xl font-bold pb-2'>Digital Storyteller</h1>
          <h2 className=''>Handcrafted digital experiences</h2>
        </div>
      </div>
      <div className='md:flex md:gap-[60px]'>
        <div className={ styles.item }>
          <h1 className='text-xl'>What's on offer</h1>
          <li className='list-none'>Super fast website - Fast page load times</li>
          <li className='list-none'>Website built in 3 days</li>
          <li className='list-none'>Fully SEO - Search Engine Optimization out of the box</li>
          <li className='list-none'>Fully mobile responsive - Viewable on smartphone, tablet and desktop/laptop</li>
          <li className='list-none'>1 year free domain - After 1 year, normal yearly rate will apply</li>
          <li className='list-none'>Free hosting with Vercel</li>
          <li className='list-none'>Free logo design</li>
          <li className='list-none'>Content can be provided - Free generic images can be provided</li>
          <li className='list-none'>Up to 20 images for entire site</li>
          <p className='text-lg'>Price: <span className=' text-2xl font-bold'>R 1500</span></p>
         
          <Button url='/contact' text='Contact'/>
        </div>
      </div>
    </div>
  )
}

export default About