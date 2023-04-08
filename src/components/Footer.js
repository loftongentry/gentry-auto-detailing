import Link from 'next/link'
import { FaFacebook } from 'react-icons/fa'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <>
      <div className={styles.waveContainer}>
        <div className={`${styles.wave} ${styles.wave1}`} />
        <div className={`${styles.wave} ${styles.wave2}`} />
        <div className={`${styles.wave} ${styles.wave3}`} />
        <div className={`${styles.wave} ${styles.wave4}`} />
      </div>
      <div className={styles.footer}>
        <div className={styles.socialIcon}>
          <Link href='https://www.facebook.com/GentrysAutoDetailing'>
            <FaFacebook />
          </Link>
        </div>
        <div className={styles.menu}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services Offered</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </div>
        <p>Website Designed by Lofton Gentry</p>
      </div>
    </>
  )
}

export default Footer