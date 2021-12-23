import Head from 'next/head'
import Script from 'next/script'

const HeadSection = () => {
  return (
    <section>
      <Head >
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta charSet="utf-8" />
        <title>Luiz Bueno - Full Stack Developer</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta name="viewport" key="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          key="description"
          content="Online portifolio of Luiz Bueno and his experience with web development, user experience and user interfaces and agile frameworks." />
        <meta name="author" key="author" content="Luiz Bueno - contact@luizbueno.com" />
      </Head>

      <Script src="https://s.darwin.to/si60f877daab8c0e21075c7059.js" strategy="beforeInteractive" />
    </section>
  )
}

export default HeadSection
