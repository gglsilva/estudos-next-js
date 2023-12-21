import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar(){
  return(
    <>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
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
    </>
  )
}