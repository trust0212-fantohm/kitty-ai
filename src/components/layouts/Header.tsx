'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/images/kittyai-token-2.png'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='fixed top-0 z-50 w-full bg-black/40 backdrop-blur-sm'>
      <div className='container flex h-20 items-center !max-w-[1536px]'>
        <Link href='/'>
          <Image src={Logo} alt='Logo' width={80} height={80} />
        </Link>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
