'use client'

import Image from 'next/image'
import Link from 'next/link'
import cx from 'classnames'
import { inter, shantell } from '@/app/fonts'
import KittyTokenImage1 from '@/assets/images/kittyai-token-1.png'
import KittyTokenImage2 from '@/assets/images/kittyai-token-2.png'
import Logo from '@/assets/images/logo.png'
import Socials from '@/components/Socials'

const Footer = () => {
  return (
    <footer className='bg-gray-900'>
      <div className='container space-y-10 py-10 md:py-4 md:space-y-4'>
        <div className='flex justify-between gap-4 md:flex-col md:items-center'>
          <Link href='/' className='flex flex-shrink-0 items-center'>
            {/* <Image
              src={KittyTokenImage1}
              alt='Kitty AI Token'
              width={100}
              height={100}
              className='sm:h-20 sm:w-20'
            />
            <Image src={Logo} alt='Logo' width={150} height={50} /> */}
            <Image
              src={KittyTokenImage2}
              alt='Kitty AI Token'
              width={100}
              height={100}
              className='sm:h-20 sm:w-20'
            />
          </Link>
          <div className='flex items-center gap-8'>
            <div>
              <p className='font-bold'>Join Kitty AI Now</p>
              <p className={cx('font-light', shantell.className)}>
                And Cat-apult Your Earnings to Purr-fection!
              </p>
            </div>
            <Socials />
          </div>
        </div>
        <p
          className={cx(
            'text-center text-sm font-light underline',
            inter.className,
          )}
        >
          &copy; 2024 by Kitty Ai. All rights reserved!
        </p>
      </div>
    </footer>
  )
}

export default Footer
