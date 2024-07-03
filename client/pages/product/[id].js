import { ErrorAlert } from '@/components/Commons/Messages/Messages';
import { Col, InputNumber, Row, Tabs } from 'antd';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './product.module.css';
import { ButtonComp } from '@/components/Commons/ButtonComp/ButtonComp';
import { ProductCard } from '@/components/Commons/ProductCard/ProductCard';
import { useCartContext } from '@/context/CartContext';
import ReviewsAndRatings from '@/components/ReviewsAndRatings/ReviewsAndRatings';


const ProductPage = () => {
    const router = useRouter();
    let productId = router.query?.id;
    const [product, setProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [qtyToShop, setQtyToShop] = useState('1');
    const { addToCart } = useCartContext();

    const onChange = (key) => {
        console.log(key);
    };


    const handleAddToCart = async () => {
        product.qtyToShop = qtyToShop;
        addToCart(product);
    }

    const getProduct = async (id) => {
        setLoading(true);
        await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/product/${id}`).then((res) => {
            setLoading(false);
            if (res.status === 200) {
                setProduct(res.data);
                getRelatedProducts(res.data?.mainCategory);
            }
            else {
                ErrorAlert(res.data.errorMessage);
            }
        }).catch(err => {
            setLoading(false);
            console.log(err)
        })
    }

    const getRelatedProducts = async (id) => {
        setLoading(true);
        await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/get/related/${id}`).then(async (res) => {
            setLoading(false);
            if (res.status === 200) {
                setRelatedProducts(res.data?.filter(f => f?._id !== productId));
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
        if (productId) {
            getProduct(productId);
        }

        return () => {

        }
    }, [productId]);



    const ProductDescription = () => {
        // Function to filter out specific keys
        const filterObject = (obj, keysToExclude) => {
            return Object.keys(obj)
                .filter(key => !keysToExclude.includes(key))
                .reduce((acc, key) => {
                    acc[key] = obj[key];
                    return acc;
                }, {});
        };

        // Keys to exclude
        const keysToExclude = ["_id", "createdAt", "updatedAt", "pictures", "__v", "featured", "title", "description", "price"];

        // Use the function
        const filteredData = filterObject(product, keysToExclude);

        return (
            <div className={styles.descriptionItemContainer}>
                <div>
                    <h1 className='mb-4 text-[36px] text-center font-bold'>Product Specifications</h1>
                    <ul className={styles.descriptionItems}>
                        {Object.entries(filteredData).map(([key, value]) => (
                            <li key={key}>
                                <strong>{key}:</strong> <span>{value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }


    const items = [
        {
            key: '1',
            label: 'Specifications',
            children: <ProductDescription />,
        },
        {
            key: '2',
            label: 'Reviews',
            children: <ReviewsAndRatings />,
        }
    ];

    return (
        <>
            <div className={styles.product}>
                <div>
                    <Row gutter={[80, 23]} className="mb-[100px]">
                        <Col xs={24} md={12} lg={12}>
                            <Carousel className={styles.Carousel} showArrows={true} autoPlay showIndicators={false} renderThumbs={() => {
                                return (
                                    product?.pictures?.map((picture, index) => {
                                        return (
                                            <div key={index} className={styles.thumbContainer}>
                                                <Image width={300} height={300} src={picture} />
                                                <p className='text-white'>wejdfjqhd</p>
                                            </div>
                                        )
                                    })
                                )
                            }}>
                                {
                                    product?.pictures?.map((picture, index) => {
                                        return (
                                            <div key={index}>
                                                <Image width={300} height={300} src={picture} />
                                                <p className='text-white'>wejdfjqhd</p>
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </Col>
                        <Col xs={24} md={12} lg={12} className={styles.right}>
                            <div className='p-[17px] md:p-0 md:ml-3'>
                                <h3>
                                    {product?.partaccessorries}
                                </h3>
                                <h1>
                                    {product?.title}
                                </h1>
                                <h5>
                                    ${product?.price}
                                </h5>
                                <div className='mt-4 flex gap-2 flex-wrap items-center'>
                                    <div className='flex-2'>
                                        <InputNumber className='py-[6px]' min={1} max={100000} defaultValue={1} onChange={(value) => setQtyToShop(value)} />
                                    </div>
                                    <div className='flex-1'>
                                        <ButtonComp text="Add to cart" loading={loading} disabled={loading} onClick={handleAddToCart} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24}>
                            <Tabs rootClassName={styles.productTabs} centered defaultActiveKey="1" items={items} onChange={onChange} />
                        </Col>
                    </Row>
                    <div className={styles.relatedProducts}>
                        <h1>You may also like</h1>
                        <Row gutter={[23, 23]}>
                            {
                                relatedProducts?.map((product, index) => {
                                    return (
                                        <Col xs={12} md={8} lg={6} key={index}>
                                            <Link href={`/product/${product?._id}`}>
                                                <ProductCard product={product} />
                                            </Link>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage;
