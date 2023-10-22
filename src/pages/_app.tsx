import type { AppProps } from 'next/app'

import { RootLayout } from '@/layouts'
import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight: ['400', '500', '900'],
  subsets: ['latin', 'cyrillic']
})

import '@/styles/globals.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout className={roboto.className}>
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default App
