import Image from 'next/image'
import { useId, useState } from 'react'
import cx from 'classnames'
import { motion } from 'framer-motion'
import BscLogo from '@/assets/images/bsc.png'
import EthereumLogo from '@/assets/images/ethereum.png'
import SolanaLogo from '@/assets/images/solana.png'
import USDTLogo from '@/assets/images/usdt.png'
import { fadeInMotion } from '@/config/motion'

interface Props {
  className?: string
}

const tabs = [
  {
    label: 'Ethereum',
    icon: EthereumLogo,
    tokens: [
      { label: 'ETH', icon: EthereumLogo },
      { label: 'USDT', icon: USDTLogo },
    ],
  },
  {
    label: 'Solana',
    icon: SolanaLogo,
    tokens: [
      { label: 'SOL', icon: SolanaLogo },
      { label: 'USDT', icon: USDTLogo },
    ],
  },
  {
    label: 'BNB',
    icon: BscLogo,
    tokens: [
      { label: 'BNB', icon: BscLogo },
      { label: 'USDT', icon: USDTLogo },
    ],
  },
]

const PresaleForm: React.FC<Props> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [activeToken, setActiveToken] = useState<number>(0)
  const id1 = useId()
  const id2 = useId()

  return (
    <motion.div
      className={cx(
        'relative space-y-5 rounded border-4 border-gray-700 bg-white p-5 text-black xs:space-y-3',
        className,
      )}
      {...fadeInMotion}
    >
      <h3 className='text-center text-[40px] font-bold leading-[1.2] text-gray-900 md:text-4xl sm:text-3xl xs:text-2xl xs:font-black'>
        Presale has started
      </h3>
      <div className='flex justify-center gap-8'>
        <div>
          <p className='text-center text-xs font-medium'>DAYS</p>
          <p className='text-center text-3xl font-bold sm:text-2xl'>03</p>
        </div>
        <div>
          <p className='text-center text-xs font-medium'>HRS</p>
          <p className='text-center text-3xl font-bold sm:text-2xl'>03</p>
        </div>
        <div>
          <p className='text-center text-xs font-medium'>MIN</p>
          <p className='text-center text-3xl font-bold sm:text-2xl'>03</p>
        </div>
        <div>
          <p className='text-center text-xs font-medium'>SEC</p>
          <p className='text-center text-3xl font-bold sm:text-2xl'>03</p>
        </div>
      </div>
      <div className='space-y-1'>
        <p className='text-xs'>Select Chain</p>
        <ul className='grid grid-cols-3 gap-1 sm:grid-cols-1'>
          {tabs.map((tab, key) => (
            <button
              className={cx(
                'flex items-center justify-center gap-2 rounded border p-2 transition-all duration-200 ease-in-out',
                activeTab === key
                  ? 'border-primary bg-primary text-white'
                  : 'border-primary/50 bg-transparent text-black',
              )}
              key={tab.label}
              onClick={() => setActiveTab(key)}
            >
              <Image
                src={tab.icon}
                alt={tab.label}
                width={16}
                height={16}
                className='rounded-full'
              />
              <p className='text-sm font-medium'>{tab.label}</p>
            </button>
          ))}
        </ul>
      </div>
      <div className='space-y-1'>
        <p className='text-xs'>Select Token</p>
        <ul className='grid grid-cols-2 gap-1'>
          {tabs[activeTab].tokens.map((token, key) => (
            <button
              className={cx(
                'flex items-center justify-center gap-2 rounded border p-2 transition-all duration-200 ease-in-out',
                activeToken === key
                  ? 'border-primary bg-primary text-white'
                  : 'border-primary/50 bg-transparent text-black',
              )}
              key={token.label}
              onClick={() => setActiveToken(key)}
            >
              <Image
                src={token.icon}
                alt={token.label}
                width={16}
                height={16}
                className='rounded-full'
              />
              <p className='text-sm font-medium'>{token.label}</p>
            </button>
          ))}
        </ul>
      </div>
      <p className='text-center text-sm font-bold'>1 $Kitty = $ 0.31</p>
      <div className='flex gap-1'>
        <label htmlFor={id1} className='block w-full space-y-1'>
          <p className='text-sm'>Pay with ETH</p>
          <input
            type='text'
            className='w-full rounded border border-primary/50 px-3 py-2 text-sm transition-all duration-200 ease-in-out focus:border-primary'
            id={id1}
            placeholder='0'
          />
        </label>
        <label htmlFor={id2} className='block w-full space-y-1'>
          <p className='text-sm'>Receive $Kitty</p>
          <input
            type='text'
            className='w-full rounded border border-primary/50 px-3 py-2 text-sm transition-all duration-200 ease-in-out focus:border-primary'
            id={id2}
            placeholder='0'
          />
        </label>
      </div>
      <button className='w-full rounded bg-primary p-4 font-medium text-white sm:p-2'>
        Connect wallet
      </button>
    </motion.div>
  )
}

export default PresaleForm
