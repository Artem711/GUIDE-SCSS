// PLUGINS IMPORTS //
import { NextSeo } from "next-seo"
import Head from "next/head"

import "../styles/global.scss"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
