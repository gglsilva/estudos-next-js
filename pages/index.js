import { Inter } from 'next/font/google'
import Style from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1 className={Style.title}>Hello World Next.js</h1>
    </>
  )
}
