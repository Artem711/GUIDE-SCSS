// PLUGINS IMPORTS //
import { ThemeProvider } from "styled-components"
import { NextSeo } from "next-seo"

// COMPONENTS IMPORTS //
import Head from "next/head"
import Theme from "styles/theme"

// EXTRA IMPORTS //
import "styles/global.scss"

/////////////////////////////////////////////////////////////////////////////

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title="Natours | Exciting tours for adventurous people"
        description="A short description goes here."
      />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
