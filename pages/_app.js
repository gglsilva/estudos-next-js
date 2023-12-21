import '@/styles/globals.css'

import MainContainer from '@/components/MainConteiner'

export default function App({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}
