//TODO: Need to add fade out when clicking on new page
import Layout from "@/components/Layout"
import styles from '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

