import GeneralFooter from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<><Component {...pageProps} /><GeneralFooter /></>)
}

export default MyApp
