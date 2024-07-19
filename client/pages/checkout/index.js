import React, { useMemo, useState } from "react";
import styles from "./checkout.module.css";
import { Alert, Checkbox, Col, Divider, Form, Input, Row, Select } from "antd";
import { ErrorAlert, SuccessAlert } from "@/components/Commons/Messages/Messages";
import { ButtonComp } from "@/components/Commons/ButtonComp/ButtonComp";
import { useRouter } from "next/router";
import moment from "moment";
import axios from "axios";
import { isAuthenticated } from "@/components/Commons/Auth/Auth";
import { useCartContext } from "@/context/CartContext";
import countryList from 'react-select-country-list'
import CheckoutSteps from "@/components/CheckoutSteps/CheckoutSteps";
import { PaypalButtonWrapper } from "@/components/Payments/PaypalButtonWrapper";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const CheckoutPage = () => {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState({});
  const [showPayment, setShowPayment] = useState(false);
  const [notes, setNotes] = useState("");
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
  const [savedBillingAddress, setSavedBillingAddress] = useState({});
  const [savedShippingAddress, setSavedShippingAddress] = useState({});
  const { cart, clearCart } = useCartContext();
  const countryOptions = useMemo(() => countryList().getData(), [])

  const totalAmount = cart?.reduce((a, b) => a + parseInt(b?.Price) * parseInt(b?.qtyToShop), 0);
  const shippingCost = 210;

  const transactionSuccess = async (data) => {
    await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/place-order`, {
      notes,
      placed: moment().format("DD/MM/YYYY"),
      subTotal: totalAmount,
      shipping: shippingCost,
      paymentMethod: "Paypal",
      totalAmount: totalAmount + shippingCost,
      user: { email: savedBillingAddress?.email, fullName: savedBillingAddress?.fullName },
      cartProducts: cart,
      billingAddress: savedBillingAddress,
      shippingAddress: savedShippingAddress,
      paymentData: data
    }, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }
    )
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          clearCart();
          SuccessAlert(res.data.successMessage);
          setTimeout(() => {
            if (isAuthenticated()) {
              router.push('/user/orders');
            } else {
              router.push("/");
            }
          }, 2000);
        } else {
          ErrorAlert(res.data.errorMessage)
        }
      }).catch(err => {
        setLoading(false);
        console.log(err)
        ErrorAlert(err?.message);
      })
  }

  const transactionError = () => {

  }
  const transactionCanceled = () => {

  }

  const onFinish = (values) => {
    setAddress(values);
    setShowPayment(true);
  }

  const handlePaymentClick = () => {
    form.submit();
    const { billingAddress, shippingAddress } = form.getFieldsValue();
    setSavedBillingAddress(billingAddress)
    setSavedShippingAddress(shippingAddress)
    setShowPayment(true);
  }

  const handleLogin = () => {
    localStorage.setItem("redirectUrl", "/checkout");
    router.push("/login")
  }

  return (
    <div className={styles.checkout}>
      <div className="p-[30px]">
        <CheckoutSteps step={1} loading={loading} />
      </div>
      <h1 className={styles.title}>Checkout</h1>
      {
        !isAuthenticated() &&
        <Alert className="max-w-[600px] m-[20px] ml-[30px]" type="warning" message={<div>Please <button onClick={handleLogin} className="btn underline">Login</button> before placing order if you want to track your orders</div>} />
      }
      <Row gutter={[23, 23]}>
        <Col xs={24} md={17}>
          <div className="p-[17px] md:p-[40px]" style={{ maxWidth: 800 }}>
            {
              !showPayment ?
                <Form
                  layout="vertical"
                  form={form}
                  name="nest-messages"
                  className={styles.form}
                  onFinish={onFinish}
                  initialValues={{
                    billingAddress: {
                      email: "",
                      fullName: "",
                      phone: "",
                      country: "",
                      state: "",
                      city: "",
                      postalCode: "",
                      address: "",
                      apartment: "",
                      orderNotes: "",
                    },
                    shippingAddress: {
                      email: "",
                      fullName: "",
                      phone: "",
                      country: "",
                      state: "",
                      city: "",
                      postalCode: "",
                      address: "",
                      apartment: "",
                    },
                  }}
                >
                  <div>
                    <h2 className="mb-8">Billing Details: </h2>
                    <Form.Item
                      name={['billingAddress', 'email']}
                      label="Email"
                      rules={[
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ]}
                    >
                      <Input placeholder='Enter email' />
                    </Form.Item>
                    <Form.Item
                      name={['billingAddress', 'fullName']}
                      label="Full Name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Full Name!',
                        },
                      ]}
                    >
                      <Input placeholder='Enter Full Name' />
                    </Form.Item>
                    <Form.Item
                      name={['billingAddress', 'phone']}
                      label="Phone"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Phone!',
                        },
                      ]}
                    >
                      <Input placeholder='Enter Phone' />
                    </Form.Item>
                    <Row gutter={[23, 23]}>
                      <Col xs={24} md={12}>
                        <Form.Item
                          name={['billingAddress', 'country']}
                          label="Country"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your Country!',
                            },
                          ]}
                        >
                          <Select allowClear showSearch options={countryOptions} />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item
                          name={['billingAddress', 'state']}
                          label="State"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your State!',
                            },
                          ]}
                        >
                          <Input placeholder='Enter State' />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item
                          name={['billingAddress', 'city']}
                          label="City"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your City!',
                            },
                          ]}
                        >
                          <Input placeholder='Enter City' />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item
                          name={['billingAddress', 'postalCode']}
                          label="Postal Code"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your Postal Code!',
                            },
                          ]}
                        >
                          <Input placeholder='Enter Postal Code' />
                        </Form.Item>
                      </Col>
                      <Col xs={24}>
                        <Form.Item
                          name={['billingAddress', 'address']}
                          label="Address"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your Address!',
                            },
                          ]}
                        >
                          <Input placeholder='Enter Address' />
                        </Form.Item>
                        <Form.Item
                          name={['billingAddress', 'apartment']}
                        >
                          <Input placeholder='Enter Apartment, suit, unit etc(optional)' />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item
                      label="Order Notes(optional)"
                    >
                      <TextArea onChange={(e) => setNotes(e.target.value)} className={styles.TextArea} placeholder='Enter Order Notes' />
                    </Form.Item>
                  </div>
                  <Checkbox onChange={(e) => e.target.checked ? setShipToDifferentAddress(true) : setShipToDifferentAddress(false)}>Ship to different address?</Checkbox>
                  {
                    shipToDifferentAddress &&
                    <div>
                      <h2 className="mb-8 mt-10">Shipping Address: </h2>
                      <div>
                        <Form.Item
                          name={['shippingAddress', 'email']}
                          label="Email"
                          rules={[
                            {
                              type: 'email',
                              message: 'The input is not valid E-mail!',
                            },
                            {
                              required: true,
                              message: 'Please input your E-mail!',
                            },
                          ]}
                        >
                          <Input placeholder='Enter email' />
                        </Form.Item>
                        <Form.Item
                          name={['shippingAddress', 'fullName']}
                          label="Full Name"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your Full Name!',
                            },
                          ]}
                        >
                          <Input placeholder='Enter Full Name' />
                        </Form.Item>
                        <Form.Item
                          name={['shippingAddress', 'phone']}
                          label="Phone"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your Phone!',
                            },
                          ]}
                        >
                          <Input placeholder='Enter Phone' />
                        </Form.Item>
                        <Row gutter={[23, 23]}>
                          <Col xs={24} md={12}>
                            <Form.Item
                              name={['shippingAddress', 'country']}
                              label="Country"
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your Country!',
                                },
                              ]}
                            >
                              <Select allowClear showSearch options={countryOptions} />
                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>
                            <Form.Item
                              name={['shippingAddress', 'state']}
                              label="State"
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your State!',
                                },
                              ]}
                            >
                              <Input placeholder='Enter State' />
                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>
                            <Form.Item
                              name={['shippingAddress', 'city']}
                              label="City"
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your City!',
                                },
                              ]}
                            >
                              <Input placeholder='Enter City' />
                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>
                            <Form.Item
                              name={['shippingAddress', 'postalCode']}
                              label="Postal Code"
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your Postal Code!',
                                },
                              ]}
                            >
                              <Input placeholder='Enter Postal Code' />
                            </Form.Item>
                          </Col>
                          <Col xs={24}>
                            <Form.Item
                              name={['shippingAddress', 'address']}
                              label="Address"
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your Address!',
                                },
                              ]}
                            >
                              <Input placeholder='Enter Address' />
                            </Form.Item>
                            <Form.Item
                              name={['shippingAddress', 'apartment']}
                            >
                              <Input placeholder='Enter Apartment, suit, unit etc(optional)' />
                            </Form.Item>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  }
                </Form>
                :
                // showPayment &&
                (
                  <>
                    <h2 className="text-[28px]">Please pay total amount of <b>${totalAmount + shippingCost}</b> to process your order.</h2>
                    <PayPalScriptProvider
                      options={{
                        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                        components: "buttons",
                        currency: "USD"
                      }}
                    >
                      <PaypalButtonWrapper
                        amount={totalAmount + shippingCost}
                        placeOrder={transactionSuccess}
                        currency={"USD"}
                        showSpinner={false}
                      />
                    </PayPalScriptProvider>
                  </>
                )
            }
          </div>
        </Col>
        <Col xs={24} md={7} className={styles.right}>
          <div className="p-[17px] md:p-[20px] mb-10 md:mb-0">
            <h3>Order Details:</h3>
            {
              cart?.map((prod, index) => {
                return (
                  <div className="flex justify-between" key={index}>
                    <h4 className="font-bolder text-[16px] max-w-[170px]">
                      {prod?.title} x {prod?.qtyToShop}
                    </h4>
                    <div className="w-fit">
                      <h4 className="font-bold text-[16px]">${parseInt(prod?.Price) * parseInt(prod?.qtyToShop)}</h4>
                    </div>
                  </div>
                )
              })
            }
            <Divider />
            <div className={styles.orderDetailItem}>
              <h5>Sub Total</h5>
              <h5>${totalAmount}</h5>
            </div>
            <div className={styles.orderDetailItem}>
              <h5>Shipping</h5>
              <h5>${shippingCost}</h5>
            </div>
            <div className={styles.orderDetailItem}>
              <h5>Order Total <br /></h5>
              <h5>${totalAmount + shippingCost}</h5>
            </div>
            <div>
              <ButtonComp text="MAKE PAYMENT" loading={loading} disabled={loading} onClick={handlePaymentClick} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutPage;
