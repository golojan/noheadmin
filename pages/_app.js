import '../styles/globals.css'
import { useEffect } from 'react'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {

  useEffect(() => {

  }, [])

  return <><Component {...pageProps} />    <Script src='../public/js/test.js' strategy='lazyOnload' />
  </>
}

export default MyApp
