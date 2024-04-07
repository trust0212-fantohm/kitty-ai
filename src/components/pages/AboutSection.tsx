import Image from 'next/image'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { shantell } from '@/app/fonts'
import AboutImage1 from '@/assets/images/about1.jpg'
import AboutImage2 from '@/assets/images/about2.png'
import AboutImage3 from '@/assets/images/about3.png'
import { fadeInMotion } from '@/config/motion'

interface Props {
  className?: string
}

const characters = [
  {
    avatar: AboutImage1,
    name: 'Commander Whiskerbyte',
    description:
      'Born on a mining colony orbiting a gas giant, Whiskerbyte quickly learned to navigate both the physical and digital frontier.',
    // "Born on a mining colony orbiting a gas giant, Whiskerbyte quickly learned to navigate both the physical and digital frontier.<br /><br />A former space force commander turned rogue hacker, he's wanted in several star systems for cybercrimes against corrupt corporations.<br /><br />Despite his gruff exterior, he follows a strict code of honor and only takes on jobs that align with his principles.<br /><br />Whiskerbyte is on a personal quest to dismantle the digital empire of the syndicate that betrayed him.",
  },
  {
    avatar: AboutImage2,
    name: 'Saga Pawsia',
    description:
      'Pawsia hails from a planet known for its vast libraries and ancient monasteries.',
    // "Pawsia hails from a planet known for its vast libraries and ancient monasteries.<br /><br />Once a guardian of knowledge, her life took a turn when a mysterious artifact fell into her hands, leading her on an interstellar journey.<br /><br />Sage Pawsia is now a renowned mediator who can soothe tense negotiations with her presence alone.Despite her peaceful demeanor, she's skilled in several martial arts, using them only when diplomacy fails.",
  },
  {
    avatar: AboutImage3,
    name: 'Scarlet Furtale',
    description:
      'The enigmatic Scarlet Furtale grew up amidst the neon-lit alleys of a bustling spaceport bazaar.',
    // "The enigmatic Scarlet Furtale grew up amidst the neon-lit alleys of a bustling spaceport bazaar.<br /><br />With a wink and a smile, she charmed secrets out of the most tight-lipped travelers.<br /><br />Known for her agility and wit, Scarlet now operates as a bounty hunter with a knack for finding people who don't want to be found.<br /><br />While she may seem carefree, she's on a personal mission to find the legendary songstress who saved her from a life of poverty.",
  },
]

const AboutSection: React.FC<Props> = ({ className }) => {
  return (
    <section id='about' className={cx('bg-gray-900', className)}>
      <div className='container space-y-20 py-20 md:space-y-12 md:py-12'>
        <motion.h2 className='text-center text-primary' {...fadeInMotion}>
          Meet The Kitty
        </motion.h2>
        <div className='mx-auto w-full max-w-5xl space-y-20 md:space-y-12'>
          {characters.map((character, i) => (
            <motion.div
              className={cx(
                'flex items-center gap-8 sm:flex-col sm:items-center',
                i % 2 === 1 ? 'flex-row-reverse' : '',
              )}
              key={i}
              initial='hidden'
              whileInView='visible'
              viewport={{ amount: 0.3, once: true }}
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
              transition={{ duration: 0.8 }}
            >
              <Image
                src={character.avatar}
                alt={`Character ${i}`}
                width={200}
                height={200}
                className='h-fit rounded-full'
              />
              <div className='space-y-4'>
                <h4 className='text-2xl font-bold text-primary md:text-xl sm:text-center'>
                  {character.name}
                </h4>
                <p
                  className={cx(
                    'text-xl font-light leading-tight md:text-base sm:text-center',
                    shantell.className,
                  )}
                  dangerouslySetInnerHTML={{ __html: character.description }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
