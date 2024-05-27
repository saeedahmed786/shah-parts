import React, { useEffect, useState } from "react";
// import styles from "../styles/home.module.css";
// import axios from "axios";
// import { useRouter } from "next/router";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { ErrorAlert } from "@/components/Commons/Messages/Messages";
// import Header from "@/components/Home/Header/Header";
// import Categories from "@/components/Home/Categories/Categories";
// import Products from "@/components/Home/Products/Products";
// import { MainProductCard } from "@/components/Commons/MainProductCard/MainProductCard";
// import { CategoryCard } from "@/components/Commons/CategoryCard/CategoryCard";
// import newArrivalImg from "../public/assets/new.webp"
// import boy from "../public/assets/boy.webp"
// import girl from "../public/assets/girl.webp"
// import sale from "../public/assets/sale.webp"
// import Link from "next/link";
// import { Navigation } from "swiper/modules";
// import { Col, Row } from "antd";

const Home = () => {
  // const history = useRouter();
  // const [productsArray, setProductsArray] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const getAllData = async (e) => {
  //   setLoading(true);
  //   await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/get/0`, { ss: "" }).then(async (res) => {
  //     setLoading(false);
  //     if (res.status === 200) {
  //       setProductsArray(res.data?.products);
  //     }
  //     else {
  //       ErrorAlert(res.data.errorMessage);
  //     }
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }

  // const getAllCategories = async (e) => {
  //   setLoading(true);
  //   await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories/sub-categories`).then(async (res) => {
  //     setLoading(false);
  //     if (res.status === 200) {
  //       setCategories(res.data);
  //     }
  //     else {
  //       ErrorAlert(res.data.errorMessage);
  //     }
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }

  // useEffect(() => {
  //   getAllData();
  //   getAllCategories();

  //   return () => {

  //   }
  // }, []);

  return (
    <div>Home</div>
  );
};

export default Home;
