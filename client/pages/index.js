// pages/Home.js
import Header from '@/components/Home/Header/Header';
import { Col, Input, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from "../styles/home.module.css"
import featuredImg1 from "../public/assets/Sidebar-1.png";
import featuredImg2 from "../public/assets/Sidebar-2.png";
import featuredImg3 from "../public/assets/Sidebar-3.png";
import likeOnFacebook from "../public/assets/followonfb.png";
import featuredBadge from "../public/assets/sidebar-badge-1.png";
import browseBg1 from "../public/assets/browseBg1.jpg";
import browseBg2 from "../public/assets/browseBg2.png";
import { ErrorAlert } from '@/components/Commons/Messages/Messages';
import axios from 'axios';
import { ProductCard } from '@/components/Commons/ProductCard/ProductCard';
import { ButtonComp } from '@/components/Commons/ButtonComp/ButtonComp';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const [featuredProductsArray, setFeaturedProductsArray] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);


  const getAllFeaturedProducts = async (e) => {
    setLoading(true);
    await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/get/featured`).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        setFeaturedProductsArray(res.data);
      }
      else {
        ErrorAlert(res.data.errorMessage);
      }
    }).catch(err => {
      setLoading(false);
      console.log(err)
    })
  }

  const getAllBrands = async (e) => {
    setLoading(true);
    await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/brands/get`).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        setBrands(res.data);
      }
      else {
        ErrorAlert(res.data.errorMessage);
      }
    }).catch(err => {
      setLoading(false);
      console.log(err)
    })
  }

  useEffect(() => {
    getAllFeaturedProducts();
    getAllBrands();

    return () => {

    }
  }, []);


  const featuredData = [
    {
      title: "Engine Parts",
      image: "https://shahparts.com/wp-content/uploads/engines-components.png",
      items: [
        {
          link: "https://shahparts.com/product-category/parts/engine-parts/engine-components/",
          text: "Engine & Components"
        },
        {
          link: "https://shahparts.com/product-category/parts/engine-components/fuel-tanks/",
          text: "Fuel Tanks"
        },
        {
          link: "https://shahparts.com/product-category/parts/engine-components/air-compressors/",
          text: "Air Compressors"
        }
      ]
    },
    {
      title: "Transmissions & Suspension",
      image: "https://shahparts.com/wp-content/uploads/transmissions-suspension.png",
      items: [
        {
          link: "https://shahparts.com/product-category/parts/transmission-drivetrain/transmissions-automatic/",
          text: "Transmissions Assy."
        },
        {
          link: "https://shahparts.com/product-category/parts/transmission-drivetrain/power-steering-pump/",
          text: "Power Steering Pump"
        },
        {
          link: "https://shahparts.com/product-category/parts/transmission-drivetrain/propeller-shaft-rear/",
          text: "Propeller Shafts"
        }
      ]
    },
    {
      title: "LIGHT SECTION",
      image: "https://shahparts.com/wp-content/uploads/lighting-electronics.png",
      items: [
        {
          link: "https://shahparts.com/product-category/parts/lightings/fog-lights-left/",
          text: "Fog Lamps"
        },
        {
          link: "https://shahparts.com/product-category/parts/lightings/headlights-right/",
          text: "Headlights"
        },
        {
          link: "https://shahparts.com/product-category/parts/lightings/tail-lights-right/",
          text: "Tail Lights"
        }
      ]
    },
    {
      title: "Body Parts",
      image: "https://shahparts.com/wp-content/uploads/body-parts.png",
      items: [
        {
          link: "https://shahparts.com/product-category/parts/body-parts/bonnet-hoods/",
          text: "Bonnet Hoods"
        },
        {
          link: "https://shahparts.com/product-category/parts/body-parts/fender-flares/",
          text: "Fenders"
        },
        {
          link: "https://shahparts.com/product-category/parts/body-parts/doors/",
          text: "Doors"
        },
        {
          link: "https://shahparts.com/product-category/parts/body-parts/spoilers/",
          text: "Spoilers"
        }
      ]
    }
  ];

  return (
    <div className={styles.Home}>
      <main className="container mx-auto py-8">
        <Header />
        <section className={styles.featuredParts}>
          <Row gutter={[23, 23]}>
            <Col xs={24} md={16}>
              <h1 className={styles.title}>Featured auto parts categories</h1>
              <div className='flex gap-[100px] flex-wrap justify-between'>
                {
                  featuredData?.map((data, index) => {
                    return (
                      <div key={index}>
                        <h3 className={styles.subTitle}>{data?.title}</h3>
                        <div className="flex flex-wrap items-center gap-6">
                          <div>
                            <Image
                              width={200}
                              height={145}
                              src={data?.image}
                              alt=""
                            />
                          </div>
                          <div className='flex flex-col gap-y-2'>
                            {data?.items?.map((item, index) => {
                              return (
                                <Link key={index} href={item?.link} className="text-black">{item?.text}</Link>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </Col>
            <Col xs={24} md={8} className={styles.imagesContainer}>
              <Image src={featuredImg1} alt="Engine" />
              <Image src={featuredImg2} alt="ECU" />
              <Image src={featuredImg3} alt="Headlights" />
              <Image src={likeOnFacebook} alt="Like us on Facebook Banner" />
              <Image src={featuredBadge} alt="Featured Banner" />
            </Col>
          </Row>
        </section>
        <section className={styles.featuredProducts}>
          <h1 className={styles.title}>Featured Products</h1>
          <Row gutter={[23, 23]}>
            {
              featuredProductsArray?.map((product, index) => {
                return (
                  <Col xs={12} md={3} xl={5} key={index}>
                    <Link href={`/product/${product?._id}`}>
                      <ProductCard product={product} />
                    </Link>
                  </Col>
                )
              })
            }
          </Row>
        </section>
        <section className="mt-[60px]">
          <h1 className={styles.title}>car auto parts by brands</h1>
          <div className='flex items-center gap-[30px] flex-wrap'>
            {
              brands?.map((brand, index) => {
                return (
                  <Link key={index} href={`/brand/${brand?._id}`}>
                    <Image src={brand?.picture?.url} alt={brand?.name} width={200} height={200} />
                  </Link>
                )
              })
            }
          </div>
        </section>
        <section className="mt-[60px]">
          <div className='flex items-center gap-[30px] flex-wrap'>
            <div className={styles.browseContainer} style={{ backgroundImage: `url('/assets/browseBg1.jpg')` }}>
              <div className={styles.bgColor} />
              <div>
                <h2>Shah Motors Auto Parts Online</h2>
                <h2 className='mb-4'>NOW OPEN</h2>
                <ButtonComp text={"Browse"} onClick={() => router.push("/shop")} />
              </div>
            </div>
            <div className={styles.browseContainer} style={{ backgroundImage: `url('/assets/browseBg2.png')` }}>
              <div className={styles.bgColor} />
              <div>
                <h2>All New Dismantling Factory</h2>
                <h2 className='mb-4'>NOW OPEN</h2>
                <ButtonComp text={"Browse"} onClick={() => router.push("/shop")} />
              </div>
            </div>
          </div>
          <div className={styles.textContainer}>
            <p>As Japan’s leading used automobile and auto parts exporter, SHAH PARTS provides an extensive selection of top-of-the-line used parts and accessories available for worldwide delivery. Our stock is sourced daily from a network of registered and professional representatives who review all auction markets throughout Japan, as well as private owners and car dealerships.</p>
            <div className='my-4'>
              <h3>Auto Parts you get</h3>
              <ul>
                <li>Access to over 400,000 genuine parts and accessories with new stock arriving every day.</li>
                <li>Easy-to-use search results that show only the parts you need.</li>
                <li>Quick and efficient shipping direct from Japan.</li>
                <li>Expert guidance in 30 languages.</li>
                <li>Quality parts at reasonable prices.</li>
                <li>Extensive listings by Japan’s top auto makers: Toyota, Nissan, Honda, Mazda, and more!</li>
              </ul>
            </div>
            <p>We pride ourselves not only in providing quality Japanese automobiles and auto parts at prices you can afford, but also maintaining the highest level of Japanese customer service throughout the shopping process. Buy from us once and you will see why our number of loyal customers continues to grow.</p>
          </div>
        </section>
      </main>
      <section className={styles.emailListContainer} style={{ backgroundImage: `url('/assets/car.jpg')` }}>
        <div className={styles.bgColor} />
        <div className={styles.inner}>
          <div className='max-w-[600px]'>
            <h3>Expert advice to your inbox</h3>
            <h3>Subscribe to our Emailing List for Updated Prices and Sales Alert on Auto Parts and Electronics</h3>
          </div>
          <form>
            <div>
              <label>Full Name</label>
              <Input required />
            </div>
            <div>
              <label>Email</label>
              <Input type='email' required />
            </div>
            <ButtonComp text="Submit" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
