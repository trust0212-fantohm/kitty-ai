import { useState } from 'react'
import { Icon } from '@iconify/react'
import cx from 'classnames'
import { inter } from '@/app/fonts'
import Socials from '@/components/Socials'

const links = [
  { id: 'hero', label: 'Presale' },
  { id: 'howItWorks', label: 'How it Works' },
  { id: 'kittynomics', label: 'Kittynomics' },
  { id: 'about', label: 'About' },
  { id: 'faq', label: 'FAQs' },
]

interface Props {
  className?: string
}

const Navbar: React.FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClickLink = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className={cx('flex items-center gap-8 md:gap-4', className)}>
      <ul className={cx('flex gap-8 md:hidden', className)}>
        {links.map((link) => (
          <li
            className={cx(
              'cursor-pointer text-lg font-medium uppercase text-white',
              inter.className,
            )}
            key={link.label}
            onClick={() => handleClickLink(link.id)}
          >
            {link.label}
          </li>
        ))}
      </ul>
      <Socials />
      <button
        className='hidden h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-primary/50 md:flex'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Icon
          icon={!isOpen ? 'ic:outline-menu' : 'ic:outline-close'}
          className='text-xl text-white'
        />
      </button>
      <div
        className={cx(
          'absolute bottom-px left-0 right-0 z-50 grid translate-y-full bg-primary transition-all duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className='overflow-hidden'>
          <ul className='px-5 py-3'>
            {links.map((link) => (
              <li
                className={cx(
                  'mx-auto w-fit cursor-pointer py-1.5 text-center text-lg font-medium uppercase text-white',
                  inter.className,
                )}
                key={link.label}
                onClick={() => handleClickLink(link.id)}
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
