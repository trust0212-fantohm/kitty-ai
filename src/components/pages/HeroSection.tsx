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
      <div className='container relative flex h-screen !max-w-[1536px] items-center justify-end pt-20 lg:h-auto lg:flex-col xs:gap-4'>
        <div className='mt-auto'>
          <Image
            src={KittyHeroImage}
            alt='Kitty Hero'
            width={896}
            height={640}
            className='absolute bottom-0 right-[35%] w-[58vw] lg:w-[576px] lg:relative lg:right-[inherit] md:w-[480px]'
          />
        </div>
        <PresaleForm className='lg:z-10 md:-mt-28 lg:-mt-40' />
      </div>
      <div className='pointer-events-none absolute -bottom-px h-40 w-full bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900' />
    </section>
  )
}

export default HeroSection
