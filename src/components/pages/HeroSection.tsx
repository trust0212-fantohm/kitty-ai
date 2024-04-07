import Image from 'next/image'
import cx from 'classnames'
import KittyHeroImage from '@/assets/images/two-cats.png'
import PresaleForm from '@/components/PresaleForm'

interface Props {
  className?: string
}

const HeroSection: React.FC<Props> = ({ className }) => {
  return (
    <section
      id='hero'
      className={cx(
        "w-full bg-primary bg-[url('/images/background.jpg')] bg-cover bg-center",
        className,
      )}
    >
      <div className='container relative flex h-screen items-center justify-around pt-20 md:pt-60'>
        <Image
          src={KittyHeroImage}
          alt='Kitty Hero'
          width={640}
          height={640}
          className='lg:w-[480px] md:absolute md:left-1/2 md:top-20 md:w-96 md:-translate-x-1/2 sm:w-80 xs:w-60'
        />
        <PresaleForm className='md:z-10' />
      </div>
    </section>
  )
}

export default HeroSection
