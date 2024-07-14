// pages/Home.js
import Header from '@/components/Home/Header/Header';
import { Col, Input, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from "../styles/home.module.css"
import featuredBadge from "../public/assets/sidebar-badge-1.png";
import { ErrorAlert } from '@/components/Commons/Messages/Messages';
import axios from 'axios';
import { ProductCard } from '@/components/Commons/ProductCard/ProductCard';
import { ButtonComp } from '@/components/Commons/ButtonComp/ButtonComp';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { CarOutlined, DeliveredProcedureOutlined, DollarCircleOutlined, GlobalOutlined, PhoneFilled, SearchOutlined } from '@ant-design/icons';

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
    await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/makes`).then((res) => {
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
    });
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
      link: "Engine & Components",
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
      link: "Suspension & Components",
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
      link: "Lightings",
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
      link: "Exterior Parts",
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




  const handleReferCategoryToShop = (part) => {
    if (part) {
      const query = new URLSearchParams();
      if (part) query.append('part', part);

      router.push(`/shop?${query.toString()}`);
    }
  };

  return (
    <div className={styles.Home}>
      <main className="pb-8">
        <Header />
        <section className={styles.featuredParts}>
          <div className={styles.viewAllContainer}>
            <h1 className={styles.title}>Featured auto parts categories</h1>
            <Link href="/categories">View All &gt;</Link>
          </div>
          <div className=''>
            <div className='flex gap-10 flex-wrap justify-between'>
              {
                featuredData?.map((data, index) => {
                  return (
                    <button onClick={() => handleReferCategoryToShop(data?.link)} key={index}>
                      <div className='text-left'>
                        <h3 className={styles.subTitle}>{data?.title}</h3>
                        <div className="flex flex-wrap flex-col items-center gap-6">
                          <div>
                            <Image
                              style={{ height: "200px", width: "auto" }}
                              width={200}
                              height={200}
                              src={data?.image}
                              alt=""
                            />
                          </div>
                          {/* <div className='flex flex-col gap-y-2 justify-center'>
                            {data?.items?.map((item, index) => {
                              return (
                                <Link key={index} href={item?.link} className="text-black text-[17px]">{item?.text}</Link>
                              )
                            })}
                          </div> */}
                        </div>
                      </div>
                    </button>
                  )
                })
              }
            </div>
          </div>
        </section>
        <section className={styles.featuredProducts}>
          <div className='flex justify-between items-center'>
            <h1 className={`${styles.title}`}>Featured Products</h1>
            <Image width={130} src={featuredBadge} alt="Featured Banner" />
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {
              featuredProductsArray?.map((product, index) => {
                return (
                  <SwiperSlide className={styles.swiperSlide} key={index}>
                    <ProductCard product={product} />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </section>
        <section className="mt-[60px]">
          <div className={styles.viewAllContainer}>
            <h1 className={styles.title}>car auto parts by brands</h1>
            <Link href="/brands">View All &gt;</Link>
          </div>
          <div className='flex gap-10 flex-wrap'>
            {
              brands?.map((brand, index) => {
                return (
                  <div className="border-2 border-[rgba(244,244,244,1)]" key={index}>
                    <Link key={index} href={`/shop?make=${brand?.make?.toUpperCase()}`}>
                      <Image src={brand?.image} alt={brand?.make} width={200} height={200} style={{ height: "180px", objectFit: "contain" }} />
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </section>
        <section className="mt-[60px]">
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Auto Parts you get</h1>
            <p>As Japan’s leading used automobile and auto parts exporter, SHAH PARTS provides an extensive selection of top-of-the-line used parts and accessories available for worldwide delivery. Our stock is sourced daily from a network of registered and professional representatives who review all auction markets throughout Japan, as well as private owners and car dealerships.</p>
            <p>We pride ourselves not only in providing quality Japanese automobiles and auto parts at prices you can afford, but also maintaining the highest level of Japanese customer service throughout the shopping process. Buy from us once and you will see why our number of loyal customers continues to grow.</p>
            <div className='my-0'>
              <Swiper
                className={styles.swiper}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: true,
                }}
                loop={true}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }}
              >
                <SwiperSlide className={styles.swiperSlide}>
                  <div className={styles.icon}>
                    <DeliveredProcedureOutlined />
                  </div>
                  <li>Access to over 400,000 genuine parts and accessories with new stock arriving every day.</li>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <div className={styles.icon}>
                    <SearchOutlined />
                  </div>
                  <li>Easy-to-use search results that show only the parts you need.</li>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <div className={styles.icon}>
                    <GlobalOutlined />
                  </div>
                  <li>Quick and efficient shipping direct from Japan.</li>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <div className={styles.icon}>
                    <PhoneFilled />
                  </div>
                  <li>Expert guidance in 30 languages.</li>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <div className={styles.icon}>
                    <DollarCircleOutlined />
                  </div>
                  <li>Quality parts at reasonable prices.</li>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <div className={styles.icon}>
                    <CarOutlined />
                  </div>
                  <li>Extensive listings by Japan’s top auto makers: Toyota, Nissan, Honda, Mazda, and more!</li>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </main>
      <Row gutter={[23, 23]} className={styles.emailListContainer}>
        <Col xs={24} md={12}>
          <Image src="/assets/car.jpg" width={100} height={100} />
        </Col>
        <Col xs={24} md={12} className={styles.inner}>
          <div>
            <h1 className={styles.title}>Expert advice to your inbox</h1>
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
        </Col>
      </Row>
    </div>
  );
};

export default Home;
