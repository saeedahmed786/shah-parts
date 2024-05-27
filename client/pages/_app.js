// import Footer from '@/components/Commons/Footer/Footer';
import Navbar from '@/components/Commons/Navbar/Navbar';
import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


    return (
        <>
            <Head>
                <title>Shah Parts</title>
                <script src="https://kit.fontawesome.com/f78046fd3a.js" crossorigin="anonymous"></script>
            </Head>
            <Navbar />
            <div className='min-h-[60vh]'>
                <Component {...pageProps} />
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default MyApp;