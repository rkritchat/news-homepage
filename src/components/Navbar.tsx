import { useState } from 'react'

function Navbar() {
  return (
    <section className={`flex justify-between items-center pb-6`}>
      <LeftSection />
      <MobileRightSection />
      <DesktopRightSection />
    </section>
  )
}

function LeftSection() {
  return (
    <section className='md:mr-[25.5rem]'>
      <img src='/logo.svg' alt='icon' className='w-[2.6rem] mr-20' />
    </section>
  )
}

function MobileRightSection() {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)
  return (
    <section className='relative md:hidden'>
      <img
        src='/icon-menu.svg'
        alt='menu-burger'
        className='h-[1.3rem]'
        onClick={() => setIsMenuActive(!isMenuActive)}
      />
      {isMenuActive && (
        <div className='min-h-screen absolute -top-8 -right-5 w-screen flex'>
          <div className='w-full bg-[rgba(41,40,40,0.5)]'></div>
          <div className='w-[42rem] bg-white'>
            <div>
              <img
                src='/icon-menu-close.svg'
                alt='close'
                className='absolute right-6 top-6'
                onClick={() => setIsMenuActive(!isMenuActive)}
              />
            </div>
            <ul className='h-screen flex flex-col mt-40 gap-6 text-[1.3rem]'>
              <li className='menu-primary'>Home</li>
              <li className='menu-primary'>New</li>
              <li className='menu-primary'>Popular</li>
              <li className='menu-primary'>Trending</li>
              <li className='menu-primary'>Categories</li>
            </ul>
          </div>
        </div>
      )}
    </section>
  )
}

function DesktopRightSection() {
  return (
    <div className='hidden md:block'>
      <ul className='flex sm:gap-0 md:gap-5'>
        <li className='menu-primary'>Home</li>
        <li className='menu-primary'>New</li>
        <li className='menu-primary'>Popular</li>
        <li className='menu-primary'>Trending</li>
        <li className='menu-primary'>Categories</li>
      </ul>
    </div>
  )
}
export default Navbar
