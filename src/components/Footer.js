import styles from '../styles/Footer.module.css'
import { Script } from 'next/script'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={`${styles.wave} ${styles.wave1}`} />
        <div className={`${styles.wave} ${styles.wave2}`} />
        <div className={`${styles.wave} ${styles.wave3}`} />
        <div className={`${styles.wave} ${styles.wave4}`} />
      </div>
      <ul class={styles.menu}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services Offered</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </footer>
  )
}

export default Footer