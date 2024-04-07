import Image from 'next/image'
import cx from 'classnames'
import KittyHeroImage from '@/assets/images/two-cats2.png'
import PresaleForm from '@/components/PresaleForm'

interface Props {
  className?: string
}

const HeroSection: React.FC<Props> = ({ className }) => {
  return (
    <section
      id='hero'
      className={cx(
        "relative w-full bg-primary bg-[url('/images/background.jpg')] bg-cover bg-center",
        className,
      )}
    >
      <div className='container relative flex h-screen items-center justify-around pt-20 md:h-fit md:flex-col gap-12 xs:gap-4'>
        <Image
          src={KittyHeroImage}
          alt='Kitty Hero'
          width={640}
          height={640}
          className='lg:w-[480px] md:w-96 xs:w-64'
        />
        <PresaleForm className='md:z-10' />
      </div>
      <div className='pointer-events-none absolute bottom-0 h-20 w-full bg-gradient-to-b from-transparent via-primary/50 to-primary' />
    </section>
  )
}

export default HeroSection
