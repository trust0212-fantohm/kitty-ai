import Image from 'next/image'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { shantell } from '@/app/fonts'
import KittynomicsImage from '@/assets/images/kittynomics.png'

interface Props {
  className?: string
}

const Kittynomics: React.FC<Props> = ({ className }) => {
  return (
    <section
      id='kittynomics'
      className={cx(
        "bg-[url('/images/bg1.png')] bg-cover bg-center",
        className,
      )}
    >
      <motion.div
        className='container space-y-20 py-20 md:space-y-12 md:py-12'
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          hidden: {
            y: -50,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 100,
          },
        }}
      >
        <div className='space-y-4 md:space-y-2'>
          <h2 className='text-center text-black'>$Kittynomics</h2>
          <p
            className={cx(
              'text-center text-2xl font-semibold text-black md:text-lg',
              shantell.className,
            )}
          >
            Dive into the universe of Kitty AI, where the $KITTY token reigns
            supreme
          </p>
        </div>
        <Image
          src={KittynomicsImage}
          alt='Kittynomics'
          width={992}
          height={627}
          className='mx-auto'
        />
      </motion.div>
    </section>
  )
}

export default Kittynomics
