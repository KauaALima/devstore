import { Header } from '@/components/header'
import { CartProvider } from '@/contexts/cart-context'
import { ReactNode } from 'react'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <main className="mx-auto grid min-h-screen w-full max-w-[1600px] p-8 grid-rows-app">
        <Header />
        {children}
      </main>
    </CartProvider>
  )
}
