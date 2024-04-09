import Image from 'next/image'
import cx from 'classnames'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { inter, shantell } from '@/app/fonts'
import Kitty from '@/assets/images/kitty2.png'
import TokenImage1 from '@/assets/images/kittyai-token-2.png'
import TokenImage2 from '@/assets/images/kittyai-token-3.png'
import TokenImage3 from '@/assets/images/kittyai-token-4.png'
import TokenImage4 from '@/assets/images/kittyai-token-5.png'

interface Props {
  className?: string
}

const roadmap = [
  {
    image: TokenImage1,
    title: 'THE DAWN OF $KITTY',
    actions: [
      { title: '$KITTY Presale', description: 'Grab your tokens early' },
      {
        title: 'Build Our Community',
        description: 'Join the early supporters',
      },
      {
        title: 'Strategic Alliances',
        description: 'To sprinkle extra magic on Kitty AI',
      },
    ],
  },
  {
    image: TokenImage2,
    title: 'MEME MAGIC',
    actions: [
      {
        title: 'Devs Do Something',
        description: 'The meme generator will officially be in the dev machine',
      },
      {
        title: 'Start Creating',
        description:
          'Gradual integration of $KITTY rewards means your creativity now unlocks perks',
      },
    ],
  },
  {
    image: TokenImage3,
    title: 'GRAND LAUNCH',
    actions: [
      {
        title: 'Let the Funnies Spread',
        description:
          'With the curtains rising and the meme generator making its grand debut, your comedic playground awaits',
      },
      {
        title: 'Earn Daily!',
        description: 'Every share, laugh, and like brings rewards',
      },
    ],
  },
  {
    image: TokenImage4,
    title: 'GALACTIC MISSIONS',
    actions: [
      {
        title: 'What Is Next',
        description:
          'The specialized missions with the Cosmic Comedians will navigate uncharted territories, facing new challenges and opportunities',
      },
    ],
  },
]

const RoadmapSection: React.FC<Props> = ({ className }) => {
  return (
    <section id='roadmap' className={cx('relative bg-gray-900', className)}>
      <Image
        src={Kitty}
        alt='Kitty'
        width={600}
        className='absolute bottom-0 left-1/2 -translate-x-1/2 opacity-20 md:w-96'
      />
      <div className='container !max-w-[1440px] space-y-12 relative z-10 py-20 md:space-y-12 md:pb-4'>
        <h2 className='text-center text-primary'>Roadmap</h2>
        <Swiper
          slidesPerView='auto'
          spaceBetween={40}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className=''
          wrapperClass='mx-auto w-fit pb-8'
        >
          {roadmap.map((step, i) => (
            <SwiperSlide className='!w-80 space-y-4 text-center' key={i}>
              <div
                className='mx-auto w-fit animate-spinhorizon [transform-style:preserve-3d]'
                style={{ animationDelay: i * 300 + 'ms' }}
              >
                <Image
                  src={step.image}
                  alt='Step'
                  width={80}
                  height={80}
                  className='[transform:translateZ(0rem)]'
                />
              </div>
              <p
                className={cx(
                  'mx-auto w-fit rounded-full bg-primary px-4 py-1 text-xl font-bold',
                  shantell.className,
                )}
              >
                PHASE {i + 1}
              </p>
              <p className='whitespace-nowrap text-2xl font-bold text-primary'>
                {step.title}
              </p>
              <ul className='space-y-2'>
                {step.actions.map((action) => (
                  <li className={cx('', inter.className)} key={action.title}>
                    <p className='text-lg font-bold'>{action.title}</p>
                    <p className='mx-auto max-w-60 text-sm text-gray-300'>
                      {action.description}
                    </p>
                  </li>
                ))}
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default RoadmapSection
