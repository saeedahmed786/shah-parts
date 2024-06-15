// import Footer from '@/components/Commons/Footer/Footer';
import Footer from '@/components/Commons/Footer/Footer';
import Navbar from '@/components/Commons/Navbar/Navbar';
import SearchBar from '@/components/Commons/SearchBar/SearchBar';
import TopMenu from '@/components/Commons/TopMenu/TopMenu';
import { GlobalContextProvider } from '@/context/GlobalContext';
import Head from 'next/head';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/globals.css'
import FixedButtons from '@/components/Commons/FixedButtons/FixedButtons';

function MyApp({ Component, pageProps }) {


    return (
        <>
            <Head>
                <title>Shah Parts</title>
            </Head>
            <GlobalContextProvider>
                <FixedButtons />
                <TopMenu />
                <Navbar />
                <SearchBar />
                <div className='min-h-[60vh]'>
                    <Component {...pageProps} />
                </div>
            </GlobalContextProvider>
            <Footer />
        </>
    )
}

export default MyApp;