import Image from 'next/image'
import { useEffect, useId, useState } from 'react'
import { AnchorProvider, Program } from '@project-serum/anchor'
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { PublicKey } from '@solana/web3.js'
import {
  simulateContract,
  waitForTransactionReceipt,
  writeContract,
} from '@wagmi/core'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { parseEther, parseUnits } from 'viem'
import { useAccount, useSwitchChain } from 'wagmi'
import { inter, orbitron } from '@/app/fonts'
import BscLogo from '@/assets/images/bsc.png'
import EthereumLogo from '@/assets/images/ethereum.png'
import SolanaLogo from '@/assets/images/solana.png'
import USDTLogo from '@/assets/images/usdt.png'
import {
  BSC_ADDRESS,
  ETH_ADDRESS,
  SOL_ACCOUNT,
  SOL_PAYMENT_WALLET,
  SOL_PRICE_FEED,
  SOL_PROGRAM,
} from '@/config/env'
import { fadeInMotion } from '@/config/motion'
import { chains, config } from '@/config/wallet'
import BnbAbi from '@/contracts/kitty_bnb.abi.json'
import EthAbi from '@/contracts/kitty_eth.abi.json'
import { callBuyTokens } from '@/contracts/lib/methods'
import { PresaleProgram } from '@/contracts/presale_program'
import { IDL } from '@/contracts/presale_program'

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
      { label: 'USDT', icon: USDTLogo, disabled: true },
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

const networks: Array<'ETH' | 'SOL' | 'BNB'> = ['ETH', 'SOL', 'BNB']
const programAddress = SOL_PROGRAM
const presale = new PublicKey(SOL_ACCOUNT)
const paymentWallet = new PublicKey(SOL_PAYMENT_WALLET)
const priceFeed = new PublicKey(SOL_PRICE_FEED)

const PresaleForm: React.FC<Props> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [activeToken, setActiveToken] = useState<number>(0)
  const [payAmount, setPayAmount] = useState<string>('')
  const [receiveAmount, setReceiveAmount] = useState<string>('')
  const [network, setNetwork] = useState<'ETH' | 'SOL' | 'BNB'>('ETH')
  const id1 = useId()
  const id2 = useId()
  const { open } = useWeb3Modal()
  const { isConnected, chain } = useAccount()
  const { switchChainAsync } = useSwitchChain()
  const [loading, setLoading] = useState<boolean>(false)
  const { connect, connected } = useWallet()
  const [data, setData] = useState<Record<string, any>>({})
  const wallet = useWallet()
  const anchorWallet = useAnchorWallet()
  const [program, setProgram] = useState<Program<PresaleProgram> | undefined>()
  const { connection } = useConnection()

  useEffect(() => {
    if (!anchorWallet) return
    const provider = new AnchorProvider(connection, anchorWallet, {
      preflightCommitment: 'processed',
    })
    setProgram(new Program(IDL, programAddress, provider))
  }, [anchorWallet, connection])

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await fetch('/api/presale-state')
      setData(await response.json())
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // useEffect(() => {
  //   if (!isConnected || !chain) {
  //     return
  //   }

  //   if (network === 'ETH' && chain.id !== chains[0].id) {
  //     switchChain({ chainId: chains[0].id })
  //   }
  //   if (network === 'BNB' && chain.id !== chains[1].id) {
  //     switchChain({ chainId: chains[1].id })
  //   }
  // }, [isConnected, chain, network, switchChain])

  const handleConnectWallet = () => {
    if (network === 'SOL') {
      connect()
    } else {
      open()
    }
  }

  const handleBuy = async () => {
    if (network === 'SOL') {
      setLoading(true)
      try {
        if (!program || !wallet) return
        await callBuyTokens(
          wallet,
          program,
          presale,
          paymentWallet,
          priceFeed,
          parseInt(payAmount),
        )
        return
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    if (!chain) {
      return
    }

    try {
      setLoading(true)

      switch (network) {
        case 'ETH':
          if (chain.id !== chains[0].id) {
            await switchChainAsync({ chainId: chains[0].id })
          }
          if (activeToken === 0) {
            const { request } = await simulateContract(config, {
              abi: EthAbi,
              address: ETH_ADDRESS as `0x${string}`,
              functionName: 'buyWithEth',
              args: [],
              value: parseEther(payAmount),
            })
            const hash = await writeContract(config, request)
            const result = await waitForTransactionReceipt(config, { hash })

            console.log(result)
          } else if (activeToken === 1) {
            const { request } = await simulateContract(config, {
              abi: EthAbi,
              address: ETH_ADDRESS as `0x${string}`,
              functionName: 'buyWithUSDT',
              args: [parseUnits(payAmount, 6)],
            })
            const hash = await writeContract(config, request)
            const result = await waitForTransactionReceipt(config, { hash })

            console.log(result)
          }
          break
        case 'BNB':
          if (chain.id !== chains[1].id) {
            await switchChainAsync({ chainId: chains[1].id })
          }
          if (activeToken === 0) {
            const { request } = await simulateContract(config, {
              abi: BnbAbi,
              address: BSC_ADDRESS as `0x${string}`,
              functionName: 'buyWithEth',
              args: [],
              value: parseEther(payAmount),
            })
            const hash = await writeContract(config, request)
            const result = await waitForTransactionReceipt(config, { hash })

            console.log(result)
          } else if (activeToken === 1) {
            const { request } = await simulateContract(config, {
              abi: BnbAbi,
              address: BSC_ADDRESS as `0x${string}`,
              functionName: 'buyWithUSDT',
              args: [parseUnits(payAmount, 6)],
            })
            const hash = await writeContract(config, request)
            const result = await waitForTransactionReceipt(config, { hash })

            console.log(result)
          }
          break
        default:
          break
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const handleChangePayAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (isNaN(+value)) {
      return
    }

    setPayAmount(value)
  }

  const handleChangeReceiveAmount = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value

    if (isNaN(+value)) {
      return
    }

    setReceiveAmount(value)
  }

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
              onClick={() => {
                setActiveTab(key)
                setNetwork(networks[key])
              }}
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
                'flex items-center justify-center gap-2 rounded border p-2 transition-all duration-200 ease-in-out disabled:cursor-not-allowed disabled:opacity-50',
                activeToken === key
                  ? 'border-primary bg-primary text-white'
                  : 'border-primary/50 bg-transparent text-black',
              )}
              disabled={token.disabled}
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
      <p className={cx('text-center text-sm font-medium', inter.className)}>
        $USD RAISED: {data.usd_raised} / TOKENS SOLD: {data.tokens_sold}
      </p>
      <div className='flex gap-1'>
        <label htmlFor={id1} className='block w-full space-y-1'>
          <p className='text-sm'>
            Pay with {tabs[activeTab].tokens[activeToken].label}
          </p>
          <input
            type='text'
            className='w-full rounded border border-primary/50 px-3 py-2 text-sm transition-all duration-200 ease-in-out focus:border-primary'
            id={id1}
            placeholder='0'
            value={payAmount}
            onChange={handleChangePayAmount}
          />
        </label>
        <label htmlFor={id2} className='block w-full space-y-1'>
          <p className='text-sm'>Receive $Kitty</p>
          <input
            type='text'
            className='w-full rounded border border-primary/50 px-3 py-2 text-sm transition-all duration-200 ease-in-out focus:border-primary'
            id={id2}
            placeholder='0'
            value={receiveAmount}
            onChange={handleChangeReceiveAmount}
          />
        </label>
      </div>
      {network === 'SOL' && !connected ? (
        <WalletMultiButton>
          <p className={cx(orbitron.className)}>Connect wallet</p>
        </WalletMultiButton>
      ) : (
        <button
          className='w-full rounded bg-primary p-4 font-medium text-white disabled:bg-gray-400 sm:p-2'
          disabled={loading}
          onClick={() => {
            ;(connected && network === 'SOL') || isConnected
              ? handleBuy()
              : handleConnectWallet()
          }}
        >
          {(connected && network === 'SOL') ||
          (network !== 'SOL' && isConnected)
            ? 'Buy'
            : 'Connect wallet'}
        </button>
      )}
    </motion.div>
  )
}

export default PresaleForm
