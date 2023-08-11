import MainLay from '@/layout/main/MainLay'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {MantineProvider} from '@mantine/core';

import {
  createEmotionCache
} from '@mantine/core';
import { manTheme } from '@/themes/mantine';
//import { Nossr } from '@/components/NoSsr';
import rtlPlugin from 'stylis-plugin-rtl';

const myCache = createEmotionCache({
  key: 'mantine-rtl',
  stylisPlugins: [rtlPlugin],
  prepend: false,
});

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
    
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={manTheme}
        //styles={manStyles}
        emotionCache={myCache}
      >
          <MainLay>
            <Component {...pageProps} />
          </MainLay>

      </MantineProvider>

    </>
  )
}


/*
# how to show different layout for different pages:

{
  Component.name === 'LoginPage'
  ? (
    <Component {...pageProps} />
  )
  : (
    <MainLay>
      <Component {...pageProps} />
    </MainLay>
  )
}

*/