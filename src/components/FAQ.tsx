import { useState } from 'react'
import { Icon } from '@iconify/react'
import cx from 'classnames'
import { inter } from '@/app/fonts'

interface Props {
  className?: string
  question: string
  answer: string
}

const FAQ: React.FC<Props> = ({ className, question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div
      className={cx(
        'mx-auto w-full max-w-3xl rounded-sm bg-white shadow-[2px_2px_4px_#0004]',
        className,
        inter.className,
      )}
    >
      <div
        className={cx(
          'flex cursor-pointer items-center justify-between gap-4 px-4 transition-all duration-300 ease-in-out',
          isOpen ? 'pb-2 pt-4' : 'py-2',
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className='text-xl font-medium text-primary md:text-base'>
          {question}
        </p>
        <Icon
          icon='ph:caret-down-bold'
          className={cx(
            'flex-shrink-0 text-primary transition-all duration-300 ease-in-out',
            isOpen ? 'rotate-180' : '',
          )}
        />
      </div>
      <div
        className={cx(
          'grid transition-all duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className={cx('overflow-hidden')}>
          <p className='px-4 pb-3 text-black md:text-sm'>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default FAQ
