//TODO: The navbar jumps immediately when you start scrolling
//I do not want this. Gotta fix that eventually

import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsSticky(window.pageYOffset > 0)
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <NavBar isSticky={isSticky} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout