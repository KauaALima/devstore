import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto grid min-h-screen w-full max-w-[1600px] p-8 grid-rows-app">
      <Header />
      {children}
    </main>
  )
}
