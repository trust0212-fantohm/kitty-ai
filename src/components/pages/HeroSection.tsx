import Image from 'next/image'
import cx from 'classnames'
import KittyHeroImage from '@/assets/images/kitty-hero.png'
import PresaleForm from '@/components/PresaleForm'

interface Props {
  className?: string
}

const HeroSection: React.FC<Props> = ({ className }) => {
  return (
    <section
      id='hero'
      className={cx(
        "w-full bg-[url('/images/background.jpg')] bg-cover bg-center",
        className,
      )}
    >
      <div className='container relative flex h-screen items-center justify-around pt-20 md:pt-40'>
        <Image
          src={KittyHeroImage}
          alt='Kitty Hero'
          width={407}
          height={754}
          className='md:absolute md:left-0 md:top-20 md:w-80 sm:w-60 xs:w-40'
        />
        <PresaleForm className='md:z-10' />
      </div>
    </section>
  )
}

export default HeroSection
