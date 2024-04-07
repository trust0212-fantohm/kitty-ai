import cx from 'classnames'
import { inter } from '@/app/fonts'

interface Props {
  className?: string
}

const ReadMoreSection: React.FC<Props> = ({ className }) => {
  return (
    <section className={cx('relative bg-primary', className)}>
      <div className='container flex !max-w-5xl gap-20 py-20 md:flex-col md:gap-8 md:py-12'>
        <h2 className='max-w-64 md:max-w-none md:text-center'>
          MEMES CATS + AI
        </h2>
        <div className='space-y-4'>
          <p className={cx('text-xl md:text-center', inter.className)}>
            Embark on a galactic crusade with Kitty AI, Where we wield humor as
            our weapon and $Kitty tokens as our shield against the empire of the
            munadane.
          </p>
          <button
            className={cx(
              'block w-56 bg-white p-2 text-primary md:mx-auto',
              inter.className,
            )}
          >
            READ MORE
          </button>
        </div>
      </div>
    </section>
  )
}

export default ReadMoreSection
