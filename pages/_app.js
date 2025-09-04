// pages/_app.js
import "../src/styles/global.css";
import "../src/styles/intro.css";


export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
