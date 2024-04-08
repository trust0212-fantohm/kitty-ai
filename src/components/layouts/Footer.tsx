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
      <div className='container py-10 pt-4 md:py-4'>
        <div className='flex justify-between gap-4 md:flex-col md:items-center'>
          <Link href='/' className='flex flex-shrink-0 items-center'>
            {/* <Image
              src={KittyTokenImage1}
              alt='Kitty AI Token'
              width={100}
              height={100}
              className='sm:h-20 sm:w-20'
            /> */}
            <Image src={Logo} alt='Logo' width={150} height={50} />
            <Image
              src={KittyTokenImage2}
              alt='Kitty AI Token'
              width={80}
              height={80}
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
            'pt-5 mt-1 text-center text-xs border-t border-white/50',
            inter.className,
          )}
        >
          Investing in cryptocurrencies and blockchain projects involves a high
          degree of risk, and there may be the potential for loss of your
          investment. Kitty AI is not responsible for any decisions made by
          visitors based on the information provided on this website or in any
          of our communications.
        </p>
        <p
          className={cx(
            'pt-5 text-center text-sm font-light underline',
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
