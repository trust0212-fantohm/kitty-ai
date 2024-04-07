'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/images/logo.png'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='fixed top-0 z-50 w-full bg-black/40 backdrop-blur-sm'>
      <div className='container flex h-20 items-center justify-between'>
        <Link href='/'>
          <Image src={Logo} alt='Logo' width={150} height={50} />
        </Link>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
