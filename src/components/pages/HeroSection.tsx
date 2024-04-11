import Image from 'next/image'
import cx from 'classnames'
import KittyHeroImage from '@/assets/images/trio.png'
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
      <div className='container relative flex !max-w-[1536px] items-center justify-around overflow-hidden pt-20 md:flex-col xs:gap-4 h-screen md:h-auto'>
        <div className='mt-auto'>
          <Image
            src={KittyHeroImage}
            alt='Kitty Hero'
            width={896}
            height={640}
            className='lg:w-[576px] md:w-[480px]'
          />
        </div>
        <PresaleForm className='md:z-10 md:-mt-10' />
      </div>
      <div className='pointer-events-none absolute -bottom-px h-40 w-full bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900' />
    </section>
  )
}

export default HeroSection
