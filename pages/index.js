import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href="/products">
            <p>Produtos</p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p>Sobre</p>
          </Link>
        </li>
      </ul>
      <h1>Hello World Next.js</h1>
    </>
  )
}
