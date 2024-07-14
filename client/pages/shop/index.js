import { ErrorAlert } from '@/components/Commons/Messages/Messages';
import { Col, Pagination, Row, Select } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import styles from './shop.module.css';
import Loading from '@/components/Commons/Loading/Loading';
import { ButtonComp } from '@/components/Commons/ButtonComp/ButtonComp';
import { ProductCard } from '@/components/Commons/ProductCard/ProductCard';


const ShopPage = () => {
  const router = useRouter();
  const [productsArray, setProductsArray] = useState([]);
  const [sortValue, setSortValue] = useState("");
  const [parts, setParts] = useState([]);
  const [makes, setMakes] = useState([]);
  const [make, setMake] = useState(router.query.Make);
  const [part, setPart] = useState(router.query.Part);
  const [model, setModel] = useState(router.query.Model);
  const [partAccessory, setPartAccessory] = useState(router.query.PartAccessory);
  const [priceRange, setPriceRange] = useState();
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState();
  const [current, setCurrent] = useState(1);

  const getAllData = async () => {
    setLoading(true);
    await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/get`, { page: current - 1, pageSize: "20", priceRange, make, model, part, partAccessory }).then(res => {
      setLoading(false);
      if (res.status === 200) {
        setProductsArray(res.data?.products);
        setTotalCount(res.data.count)
      }
      else {
        ErrorAlert(res.data.errorMessage);
      }
    }).catch(err => {
      setLoading(false);
      console.log(err)
    });
  }

  const getAllParts = async () => {
    setLoading(true);
    await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/parts`).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        setParts(res.data?.map(f => ({ value: f?.part, label: f?.part })));
      }
      else {
        ErrorAlert(res.data.errorMessage);
      }
    }).catch(err => {
      setLoading(false);
      console.log(err)
    });
  }

  const getAllMakes = async () => {
    setLoading(true);
    await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/makes`).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        setMakes(res.data?.map(f => ({ value: f?.make, label: f?.make })));
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
    getAllParts();
    getAllMakes();
    if (router.query?.Make) {
      setMake(router.query?.Make)
    }
    if (router.query?.Model) {
      setModel(router.query?.Model)
    }
    if (router.query?.Part) {
      setPart(router.query?.Part)
    }
    if (router.query?.PartAccessory) {
      setPartAccessory(router.query?.PartAccessory)
    }
    return () => {

    }
  }, [router.query]);

  useEffect(() => {
    getAllData();

    return () => {

    }
  }, [current, make, model, partAccessory, part, priceRange]);



  const sortProducts = (products, sortBy) => {
    switch (sortBy) {
      case "lth":
        return products.sort((a, b) => a.price - b.price);
      case "htl":
        return products.sort((a, b) => b.price - a.price);
      case "a-z":
        return products.sort((a, b) => a.title.localeCompare(b.title));
      case "z-a":
        return products.sort((a, b) => b.title.localeCompare(a.title));
      case "createdAt":
        return products.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      default:
        return products;
    }
  };


  const handleSortChange = (value) => {
    setSortValue(value);
    if (sortValue) {
      const sorted = sortProducts(productsArray, value);
      setProductsArray(sorted);
    }
  };

  const handleResetFilters = () => {
    setPart("");
    setPriceRange("");
    router.push("/shop");
  };

  return (
    <div className={styles.ShopPage}>
      <div className={styles.filters}>
        <div className={styles.filterSection}>
          <Row gutter={[23, 23]} justify="end">
            <Col xs={12} md={8} lg={6}>
              <div className='mb-0'>Make</div>
              <Select allowClear className={styles.select} value={make} onChange={(val) => setMake(val)} placeholder="Makes" options={makes} />
            </Col>
            <Col xs={12} md={8} lg={6}>
              <div className='mb-0'>Part</div>
              <Select allowClear className={styles.select} value={part} onChange={(val) => setPart(val)} placeholder="Parts" options={parts} />
            </Col>
            <Col xs={12} md={8} lg={6}>
              <div className='mb-0'>Price Range</div>
              <Select allowClear className={styles.select} value={priceRange} onChange={(val) => setPriceRange(val)} placeholder="Price" options={[
                { value: "50-100", label: "$50 - $100" },
                { value: "100-200", label: "$100 - $200" },
                { value: "200-300", label: "$200 - $300" },
                { value: "300-400", label: "$300 - $400" },
                { value: "400-500", label: "$400 - $500" },
                { value: "500-20000000", label: "$500>" }
              ]} />
            </Col>
            <Col xs={24} md={8} lg={6} style={{ alignSelf: "flex-end" }}>
              <div className='md:max-w-[200px]'>
                <ButtonComp text="Reset All Filters" onClick={handleResetFilters} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.sortSection}>
        <div className='flex items-center gap-6'>
          <h4 className='mb-0'>Products</h4>
          <p className='w-full'>{productsArray?.length} of {totalCount} items</p>
        </div>
        <div className={styles.right}>
          <h4 className='mb-0'>Sort By:</h4>
          <Select className={styles.sortSelect} defaultValue={"createdAt"} onChange={handleSortChange} placeholder="Sort" options={[
            { value: "lth", label: "Price: Low to High" },
            { value: "htl", label: "Price: High to Low" },
            { value: "a-z", label: "Product Name: A-Z" },
            { value: "z-a", label: "Product Name: Z-A" },
            { value: "createdAt", label: "Released Date" },
          ]} />
        </div>
      </div>
      <div className='mt-4'>
        {
          loading ?
            <Loading />
            :
            <Row gutter={[23, 23]} className="p-4">
              {
                // productsArray?.length > 0 ?
                productsArray?.map((product, index) => {
                  return (
                    <Col xs={12} md={8} lg={6} key={index}>
                      <ProductCard product={product} />
                    </Col>
                  )
                })
                // :
                // <Col xs={24} className="text-center">
                //   <h3 className='text-[36px] font-bold'>No Products Found!</h3>
                // </Col>
              }
            </Row>
        }
      </div>
      <div className='flex justify-center my-10'>
        <Pagination current={current} defaultPageSize={20} showSizeChanger={false} onChange={(page) => setCurrent(page)} total={totalCount} />
      </div>
    </div >
  )
}

export default ShopPage;