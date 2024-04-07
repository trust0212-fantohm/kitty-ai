import Link from 'next/link'
import { Icon } from '@iconify/react'
import cx from 'classnames'

const socials = [
  { href: 'https://t.me/KittyAICommunity', icon: 'bxl:telegram' },
  { href: 'https://twitter.com/KittyAIMeme', icon: 'ri:twitter-x-fill' },
  { href: 'mailto:Info@KittyAI.io', icon: 'mynaui:envelope' },
]

interface Props {
  className?: string
}

const Socials: React.FC<Props> = ({ className }) => {
  return (
    <ul className={cx('flex gap-4', className)}>
      {socials.map((social, i) => (
        <li key={i}>
          <Link
            href={social.href}
            className='flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-primary/50'
            target='_blank'
          >
            <Icon icon={social.icon} className='text-xl text-white' />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Socials
