import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { Roboto_Condensed } from '@next/font/google';
import { AppProvider } from "@/context";
import theme from './theme';

const roboto = Roboto_Condensed({
  weight: '300',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
        `}</style>
        <Component {...pageProps} />
      </ChakraProvider>
    </AppProvider>
  )

}
