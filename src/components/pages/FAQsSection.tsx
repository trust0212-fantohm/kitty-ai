import Image from 'next/image'
import cx from 'classnames'
import { motion } from 'framer-motion'
import Girl2 from '@/assets/images/kitty-girl2.png'
import Girl1 from '@/assets/images/kitty-girl.png'
import FAQ from '@/components/FAQ'
import { fadeInMotion } from '@/config/motion'

interface Props {
  className?: string
}

const faqs = [
  {
    question: 'What is Kitty AI?',
    answer:
      'Kitty AI is an innovative platform that combines the fun of creating and sharing cat memes with the financial incentives of cryptocurrency. By using artificial intelligence, users can generate unique memes and earn $KITTY tokens for their participation and creativity.',
  },
  {
    question: 'How do I earn $KITTY tokens?',
    answer:
      'You can earn $KITTY tokens by generating memes with our AI tool, sharing them on designated platforms, and engaging with the community. The more your memes are liked, shared, and celebrated, the more tokens you earn.',
  },
  {
    question: 'Do I need to know about cryptocurrencies to use Kitty AI?',
    answer:
      'Not at all! While a basic understanding of cryptocurrencies can enhance your experience, Kitty AI is designed to be user-friendly for both crypto experts and newcomers. We provide all the resources you need to get started.',
  },
  {
    question: 'Is there a cost to join Kitty AI?',
    answer:
      'Once we are completely live, Kitty Ai will be free-for-all. Joining the presale however, unlocks benefits such as earning $KITTY prior to the official launch.',
  },
  {
    question: 'Can I use Kitty AI on my mobile device?',
    answer:
      'Yes, Kitty AI will be built to be accessible across various devices, including mobile phones, tablets, and desktop computers.',
  },
  {
    question: 'How can I ensure my created memes are successful?',
    answer:
      "Success depends on creativity and engagement. We recommend studying popular trends, adding a unique twist, and actively participating in the Kitty AI community to improve your memes' reception.",
  },
  {
    question: 'What makes Kitty AI different from other meme platforms?',
    answer:
      "Kitty AI is unique because it integrates AI-powered meme creation with cryptocurrency rewards. It's not just about sharing content; it's about being part of an economy that values your sense of humor and creativity.",
  },
  {
    question: 'Are my memes and personal data safe with Kitty AI?',
    answer:
      "We prioritize the security of our users' data and content. Your memes belong to you, and personal data is handled according to strict privacy policies and industry-standard security measures.",
  },
  {
    question: 'What happens if I encounter issues or need support?',
    answer:
      'Kitty AI offers a dedicated support team ready to assist you with any issues or questions. You can contact us through our telegram group.',
  },
]

const FAQsSection: React.FC<Props> = ({ className }) => {
  return (
    <section
      id='faq'
      className={cx(
        "relative overflow-hidden bg-primary bg-center bg-[url('/images/faq.png')] bg-cover",
        className,
      )}
    >
      <div className='container relative z-10 space-y-10 py-16 md:space-y-8 md:py-12'>
        <Image
          src={Girl1}
          alt='Girl1'
          width={448}
          className='absolute bottom-0 left-0 -translate-x-1/2 -scale-x-100 lg:hidden'
        />
        <Image
          src={Girl2}
          alt='Girl2'
          width={448}
          className='absolute bottom-0 right-0 translate-x-1/2 lg:hidden'
        />
        <motion.h2 className='text-center' {...fadeInMotion}>
          FAQs
        </motion.h2>
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
              transition: { staggerChildren: 0.08, delayChildren: 0 * i },
            }),
          }}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: {
                  y: -50,
                  opacity: 0,
                },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}
            >
              <FAQ {...faq} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQsSection
