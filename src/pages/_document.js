import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/favicon.ico" rel="icon" />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700&amp;subset=latin-ext"
            rel="stylesheet"
          />
          <script src="https://polyfill.io/v3/polyfill.min.js?features=ResizeObserver" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
