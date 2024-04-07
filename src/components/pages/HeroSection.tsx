import Image from 'next/image'
import cx from 'classnames'
import KittyHeroImage from '@/assets/images/two-cats3.png'
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
      <div className='container relative flex h-screen !max-w-[1536px] items-center justify-around gap-12 pt-20 md:h-fit md:flex-col xs:gap-4'>
        <Image
          src={KittyHeroImage}
          alt='Kitty Hero'
          width={896}
          height={640}
          className='lg:w-[576px] md:w-[480px] xs:w-80'
        />
        <PresaleForm className='md:z-10' />
      </div>
      <div className='pointer-events-none absolute bottom-0 h-20 w-full bg-gradient-to-b from-transparent via-primary/50 to-primary' />
    </section>
  )
}

export default HeroSection
