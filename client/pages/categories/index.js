import { ErrorAlert } from '@/components/Commons/Messages/Messages';
import { Col, Row } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import styles from './categories.module.css';
import Loading from '@/components/Commons/Loading/Loading';


const CategoriesPage = () => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllCategories = async () => {
    setLoading(true);
    await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/parts`).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        setCategories(res.data);
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
    getAllCategories();
    return () => {

    }
  }, []);


  const handleRoute = (id) => {
    if (id) {
      const query = new URLSearchParams();

      if (id) query.append('part', id);
      router.push(`/shop?${query.toString()}`);
    }
  };

  return (
    <div className={styles.CategoriesPage}>
      <h1 className={styles.title}>All Categories</h1>
      {
        loading ?
          <Loading />
          :
          <Row gutter={[23, 15]} className="gap-4">
            {
              categories?.length > 0 ?
                categories?.map((category, index) => {
                  return (
                    <Col xs={12} md={6} lg={6} xl={4} xxl={4} className="border-2 flex justify-center items-center text-center p-4 border-[rgba(244,244,244,1)]" key={index}>
                      <button className='btn text-[28px]' onClick={() => handleRoute(category)} key={index}>
                        {category}
                      </button>
                    </Col>
                  )
                })
                :
                <Col xs={24} className="text-center">
                  <h3 className='text-[36px] font-bold'>No Categories Found!</h3>
                </Col>
            }
          </Row>
      }
    </div>
  )
}

export default CategoriesPage;