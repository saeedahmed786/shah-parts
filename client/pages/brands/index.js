import { ErrorAlert } from '@/components/Commons/Messages/Messages';
import { Col, Row } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import styles from './brands.module.css';
import Loading from '@/components/Commons/Loading/Loading';
import Image from 'next/image';


const BrandsPage = () => {
  const router = useRouter();
  const [makes, setMakes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllMakes = async () => {
    setLoading(true);
    await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/makes`).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        setMakes(res.data);
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
    getAllMakes();
    return () => {

    }
  }, []);


  const handleRoute = (id) => {
    if (id) {
      const query = new URLSearchParams();

      if (id) query.append('make', id);
      router.push(`/shop?${query.toString()}`);
    }
  };

  return (
    <div className={styles.BrandsPage}>
      <h1 className={styles.title}>All Brands</h1>
      {
        loading ?
          <Loading />
          :
          <Row justify="center" gutter={[23, 15]} className="gap-4">
            {
              makes?.length > 0 ?
                makes?.map((make, index) => {
                  return (
                    <Col xs={12} md={6} lg={4} xl={4} xxl={4} key={index}>
                      <button className="border-2 h-[200px] p-0 text-center border-[rgba(244,244,244,1)]" onClick={() => handleRoute(make?.part)} key={index}>
                        <Image src={make?.image} width={200} height={200} />
                      </button>
                      <div className='mt-1 text-[18px] font-[600] text-center'>{make?.make}</div>
                    </Col>
                  )
                })
                :
                <Col xs={24} className="text-center">
                  <h3 className='text-[36px] font-bold'>No Makes Found!</h3>
                </Col>
            }
          </Row>
      }
    </div>
  )
}

export default BrandsPage;