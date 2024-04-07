import { PropsWithChildren } from 'react'
import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'

export default function RootTemplate({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
