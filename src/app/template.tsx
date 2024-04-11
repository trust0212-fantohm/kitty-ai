'use client'

import { PropsWithChildren, useMemo, useState } from 'react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets'
import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import { DEV_MODE } from '@/config/env'

require('@solana/wallet-adapter-react-ui/styles.css')

const SOLANA_RPC_URL = DEV_MODE
  ? 'https://api.devnet.solana.com'
  : 'https://api.mainnet-beta.solana.com'

export default function RootTemplate({ children }: PropsWithChildren) {
  const [network] = useState(
    DEV_MODE ? WalletAdapterNetwork.Devnet : WalletAdapterNetwork.Mainnet,
  )
  const endpoint = useMemo(() => SOLANA_RPC_URL, [])

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network],
  )

  return (
    <div>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Header />
            {children}
            <Footer />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}
