import Image from 'next/image'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { inter, shantell } from '@/app/fonts'
import KittyStepImage1 from '@/assets/images/kittyai-step1.png'
import KittyStepImage2 from '@/assets/images/kittyai-step2.png'
import KittyStepImage3 from '@/assets/images/kittyai-step3.png'
import KittyStepImage4 from '@/assets/images/kittyai-step4.png'

interface Props {
  className?: string
}

const steps = [
  {
    image: KittyStepImage1,
    title: 'Grab the Daily Meme',
    description:
      'Every day our AI conjures up a fresh hilarious cat meme template. Begin with our digital canvas and let your humor shine',
  },
  {
    image: KittyStepImage2,
    title: 'Craft your Best Caption',
    description:
      'Inject your own clever quips or snappy sass to bring the meme to life. Your wit is your wand in the Kitty AI universe',
  },
  {
    image: KittyStepImage3,
    title: 'Share to X',
    description:
      'Broadcast your creation to X. Garner likes, laughs, and loyalty as your meme captivates cat enthusiasts and meme lovers alike',
  },
  {
    image: KittyStepImage4,
    title: 'Collect your $KITTY',
    description:
      "As your meme wins hearts, you'll earn points that magically transform into $KITTY tokens The more you engage, the more you earn",
  },
]

const HowItWorksSection: React.FC<Props> = ({ className }) => {
  return (
    <motion.section id='howItWorks' className={cx('bg-gray-900', className)}>
      <div className='container space-y-12 py-20 md:space-y-8 md:py-12'>
        <motion.div
          className='space-y-4 md:space-y-2'
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: (i = 1) => ({
              opacity: 100,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 * i },
            }),
          }}
        >
          <motion.p
            className={cx(
              'text-center text-2xl font-semibold md:text-lg',
              shantell.className,
            )}
            variants={{
              hidden: {
                y: -20,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            Unleash Your Inner Meme Maker with Kitty AI
          </motion.p>
          <motion.h2
            className='text-center text-primary'
            variants={{
              hidden: {
                y: -20,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            Create, Share, Earn, Repeat
          </motion.h2>
        </motion.div>
        <motion.div
          className='grid grid-cols-4 gap-12 md:grid-cols-2 xs:grid-cols-1'
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: (i = 1) => ({
              opacity: 100,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 * i },
            }),
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              className='relative flex flex-col items-center '
              key={i}
              variants={{
                hidden: {
                  x: -50,
                  opacity: 0,
                },
                visible: {
                  x: 0,
                  opacity: 1,
                },
              }}
            >
              <p className='absolute left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg font-bold text-primary'>
                {i + 1}
              </p>
              <Image
                src={step.image}
                alt={`Step Image ${i}`}
                width={240}
                height={240}
                className='aspect-square rounded-xl object-cover'
              />
              <p
                className={cx(
                  'mt-4 text-center text-xl font-bold text-primary',
                  inter.className,
                )}
              >
                {step.title}
              </p>
              <p
                className={cx(
                  'mt-2 text-center font-light leading-loose',
                  inter.className,
                )}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
          {/* <motion.div
            className='relative flex w-80 flex-col justify-center'
            variants={{
              hidden: {
                x: -50,
                opacity: 0,
              },
              visible: {
                x: 0,
                opacity: 1,
              },
            }}
          >
            <div className='relative'>
              <p className='absolute left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl font-bold text-primary'>
                {4}
              </p>
              <Image
                src={KittyStepImage4}
                alt={`Step Image 4`}
                width={320}
                height={220}
                className='aspect-square h-[220px] w-80 rounded-xl object-cover'
              />
            </div>
            <p
              className={cx(
                'mt-4 text-center text-xl font-bold text-primary',
                inter.className,
              )}
            >
              Collect your $KITTY
            </p>
            <p
              className={cx(
                'mt-2 text-center font-light leading-loose',
                inter.className,
              )}
            >
              As your meme wins hearts, you&apos;ll earn points that magically
              transform into $KITTY tokens The more you engage, the more you
              earn
            </p>
            <p className='mt-12 text-center text-2xl font-bold'>
              100 points = 1 $KITTY
            </p>
          </motion.div> */}
        </motion.div>
        <p className='text-center text-2xl font-bold'>100 points = 1 $KITTY</p>
      </div>
    </motion.section>
  )
}

export default HowItWorksSection
