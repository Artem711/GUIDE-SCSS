// PLUGINS IMPORTS //
import { NextSeo } from "next-seo"

import "../styles/globals.css"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
