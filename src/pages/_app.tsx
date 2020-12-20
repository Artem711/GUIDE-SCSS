// PLUGINS IMPORTS //
import Head from "next/head"
import "../styles/globals.css"

// COMPONENTS IMPORTS //
import Header from "../components/header"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Blog website</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
