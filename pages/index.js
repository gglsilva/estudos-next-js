import Style from '../styles/Home.module.css'

import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Principal</title>
        <meta name='keyworkds' content='Roupas, Calçados, Bonês'></meta>
      </Head>
      <div>
        <h1 className={Style.title}>Hello World Next.js</h1>
        <Image 
          src="/images/city.jpg" 
          width="400"
          height="500"
          alt='Cidade a noite'
        />
      </div>
      
    </>
  )
}
