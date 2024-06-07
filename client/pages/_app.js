// import Footer from '@/components/Commons/Footer/Footer';
import CategoriesBar from '@/components/Commons/CategoriesBar/CategoriesBar';
import Footer from '@/components/Commons/Footer/Footer';
import Navbar from '@/components/Commons/Navbar/Navbar';
import TopMenu from '@/components/Commons/TopMenu/TopMenu';
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
                <TopMenu />
                <Navbar />
                <CategoriesBar />
                <div className='min-h-[60vh]'>
                    <Component {...pageProps} />
                </div>
            </GlobalContextProvider>
            <Footer />
        </>
    )
}

export default MyApp;