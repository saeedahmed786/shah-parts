import React from "react";
import styles from "./cart.module.css";
import Image from "next/image";
import { Col, InputNumber, Row } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { ButtonComp } from "@/components/Commons/ButtonComp/ButtonComp";
import { useRouter } from "next/router";
import { useCartContext } from "@/context/CartContext";

const CartPage = () => {
  const router = useRouter();
  const { cart, removeFromCart, saveQtyToDb } = useCartContext();


  return (
    <div className={styles.cart} data-aos="fade-right" data-aos-duration="1000">
      <h1 className={styles.title}>My Cart</h1>
      <Row gutter={[23, 23]}>
        <Col xs={24} md={17}>
          <div className="p-[0px] pt-[17px] md:p-[40px]">
            {
              cart?.length > 0 ?
                cart?.map((prod, index) => {
                  return (
                    <div className={styles.item} key={index}>
                      <div className={styles.crtimg}>
                        <Image src={prod?.pictures[0]} width={100} height={100} alt={prod?.title} />
                      </div>
                      <div className="md:px-4">
                        <h2>
                          {prod?.title}
                        </h2>
                        <div className="flex justify-between">
                          <div className={styles.qtyContainer}>
                            <h4 className="w-fit">Qty</h4>
                            <div className="max-w-[130px]">
                              <InputNumber min={1} max={100000} value={prod?.qtyToShop} onChange={(value) => saveQtyToDb(value, prod)} />
                            </div>
                          </div>
                          <div>
                            <h6 className="w-fit">${parseInt(prod?.price) * parseInt(prod?.qtyToShop)}</h6>
                          </div>
                          <DeleteFilled className="text-[19px]" onClick={() => removeFromCart(prod?._id)} />
                        </div>
                      </div>
                    </div>
                  )
                })
                :
                <div className={styles.emptyCart}>
                  <div>
                    <h2 className={styles.subTitle}>
                      Your Cart is Empty!
                    </h2>
                    <ButtonComp text="Start Shopping Now" onClick={() => router.push("/products")} />
                  </div>
                </div>
            }
          </div>
        </Col>
        <Col xs={24} md={7} className={styles.right}>
          <div className="md:p-[40px] mb-10 md:mb-0">
            <h3>Order Details:</h3>
            <div className={styles.orderDetailItem}>
              <h5>Product Total</h5>
              <h5>£{cart?.reduce((a, b) => a + parseInt(b?.price) * parseInt(b?.qtyToShop), 0)}</h5>
            </div>
            <div className={styles.orderDetailItem}>
              <h5>Order Total</h5>
              <h5>£{cart?.reduce((a, b) => a + parseInt(b?.price) * parseInt(b?.qtyToShop), 0)}</h5>
            </div>
            <div>
              <ButtonComp disabled={cart?.length === 0} text="SECURE CHECKOUT" onClick={() => router.push("/checkout")} />
            </div>
          </div>
        </Col>
      </Row>
    </div >
  );
};

export default CartPage;
