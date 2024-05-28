// import Footer from '@/components/Commons/Footer/Footer';
import Navbar from '@/components/Commons/Navbar/Navbar';
import { GlobalContextProvider } from '@/context/GlobalContext';
import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


    return (
        <>
            <Head>
                <title>Shah Parts</title>
            </Head>
            <GlobalContextProvider>
                <Navbar />
                <div className='min-h-[60vh]'>
                    <Component {...pageProps} />
                </div>
            </GlobalContextProvider>
            {/* <Footer /> */}
        </>
    )
}

export default MyApp;