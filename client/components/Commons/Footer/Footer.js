// components/Footer.js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.css';
import paypal from "../../../public/assets/paypal.png"
import wu from "../../../public/assets/wu.png"
import jp from "../../../public/assets/jp.png"
import bank from "../../../public/assets/bank.png"
import dhl from "../../../public/assets/dhl.png"
import ups from "../../../public/assets/ups.png"
import Logo from '../Logo/Logo';

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.top}>
                <div>
                    <div>
                        <Logo />
                        <p>
                            We are Auto Parts Dealer Based in Hyogo Japan, with a network of
                            professional representatives throughout Japan.
                        </p>
                        <p>
                            <strong>Email</strong>
                            <br />
                            PARTS INQUIRY
                            <br />
                            info@shahparts.com
                            <br />
                            AUTO AUCTION
                            <br />
                            info@shahparts.com
                        </p>
                        <p>
                            <strong>Whatsapp</strong>
                            <br />
                            +81-80-5082-1650
                        </p>
                        <p>
                            <strong>Phone: </strong>
                            <br />
                            +81-78-200-6655
                        </p>
                        <p>
                            <strong>Address:&nbsp;</strong>
                            <br />
                            <strong> 〒 </strong>658-0066
                            <br />
                            <strong>
                                &nbsp;2-5 UZUMORIDAI<strong> HIGASHI NADA KU KOBE</strong>
                            </strong>
                            <strong> CITY, HYOGO.</strong>
                            <br />
                            <strong>JAPAN.</strong>
                        </p>
                        <p>&nbsp;</p>
                    </div>
                    <div className='!max-w-[600px]'>
                        <h2 className={styles.title}>Website Links</h2>
                        <div>
                            <ul>
                                <li>
                                    <Link href="/about-us">About Us</Link>
                                </li>
                                <li>
                                    <Link href="/how-to-buy">How To Buy</Link>
                                </li>
                                <li>
                                    <Link href="/terms-and-conditions">
                                        Terms and Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/payment-policy">Payment Policy</Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policies">
                                        Privacy Policies
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shipping-policy">Shipping Policy</Link>
                                </li>
                                <li>
                                    <Link href="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link href="/contact-us">Contact Us</Link>
                                </li>
                                <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12557"
                                >
                                    <Link href="/shop">Shop</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.images}>
                        <h4 className={styles.title}>Shipping partners</h4>
                        <div>
                            <Image
                                src={dhl}
                                alt="DHL"
                            />
                            <Image
                                src={jp}
                                alt="JP"
                            />
                            <Image
                                src={ups}
                                alt="UPS"
                            />
                        </div>
                        <h4 className={styles.title}>Payment Partners</h4>
                        <div className={styles.paymentPartners}>
                            <div>
                                <Image
                                    src={paypal}
                                    alt="Paypal"
                                />
                            </div>
                            <div>
                                <Image
                                    src={wu}
                                    alt="WU"
                                />
                            </div>
                            <div>
                                <Image
                                    src={bank}
                                    alt="Bank"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div>
                    <div>
                        <div>
                            <div className={styles.paymentIcon}>
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 64 32"
                                >
                                    <path d="M35.255 12.078h-2.396c-0.229 0-0.444 0.114-0.572 0.303l-3.306 4.868-1.4-4.678c-0.088-0.292-0.358-0.493-0.663-0.493h-2.355c-0.284 0-0.485 0.28-0.393 0.548l2.638 7.745-2.481 3.501c-0.195 0.275 0.002 0.655 0.339 0.655h2.394c0.227 0 0.439-0.111 0.569-0.297l7.968-11.501c0.191-0.275-0.006-0.652-0.341-0.652zM19.237 16.718c-0.23 1.362-1.311 2.276-2.691 2.276-0.691 0-1.245-0.223-1.601-0.644-0.353-0.417-0.485-1.012-0.374-1.674 0.214-1.35 1.313-2.294 2.671-2.294 0.677 0 1.227 0.225 1.589 0.65 0.365 0.428 0.509 1.027 0.404 1.686zM22.559 12.078h-2.384c-0.204 0-0.378 0.148-0.41 0.351l-0.104 0.666-0.166-0.241c-0.517-0.749-1.667-1-2.817-1-2.634 0-4.883 1.996-5.321 4.796-0.228 1.396 0.095 2.731 0.888 3.662 0.727 0.856 1.765 1.212 3.002 1.212 2.123 0 3.3-1.363 3.3-1.363l-0.106 0.662c-0.040 0.252 0.155 0.479 0.41 0.479h2.147c0.341 0 0.63-0.247 0.684-0.584l1.289-8.161c0.040-0.251-0.155-0.479-0.41-0.479zM8.254 12.135c-0.272 1.787-1.636 1.787-2.957 1.787h-0.751l0.527-3.336c0.031-0.202 0.205-0.35 0.41-0.35h0.345c0.899 0 1.747 0 2.185 0.511 0.262 0.307 0.341 0.761 0.242 1.388zM7.68 7.473h-4.979c-0.341 0-0.63 0.248-0.684 0.584l-2.013 12.765c-0.040 0.252 0.155 0.479 0.41 0.479h2.378c0.34 0 0.63-0.248 0.683-0.584l0.543-3.444c0.053-0.337 0.343-0.584 0.683-0.584h1.575c3.279 0 5.172-1.587 5.666-4.732 0.223-1.375 0.009-2.456-0.635-3.212-0.707-0.832-1.962-1.272-3.628-1.272zM60.876 7.823l-2.043 12.998c-0.040 0.252 0.155 0.479 0.41 0.479h2.055c0.34 0 0.63-0.248 0.683-0.584l2.015-12.765c0.040-0.252-0.155-0.479-0.41-0.479h-2.299c-0.205 0.001-0.379 0.148-0.41 0.351zM54.744 16.718c-0.23 1.362-1.311 2.276-2.691 2.276-0.691 0-1.245-0.223-1.601-0.644-0.353-0.417-0.485-1.012-0.374-1.674 0.214-1.35 1.313-2.294 2.671-2.294 0.677 0 1.227 0.225 1.589 0.65 0.365 0.428 0.509 1.027 0.404 1.686zM58.066 12.078h-2.384c-0.204 0-0.378 0.148-0.41 0.351l-0.104 0.666-0.167-0.241c-0.516-0.749-1.667-1-2.816-1-2.634 0-4.883 1.996-5.321 4.796-0.228 1.396 0.095 2.731 0.888 3.662 0.727 0.856 1.765 1.212 3.002 1.212 2.123 0 3.3-1.363 3.3-1.363l-0.106 0.662c-0.040 0.252 0.155 0.479 0.41 0.479h2.147c0.341 0 0.63-0.247 0.684-0.584l1.289-8.161c0.040-0.252-0.156-0.479-0.41-0.479zM43.761 12.135c-0.272 1.787-1.636 1.787-2.957 1.787h-0.751l0.527-3.336c0.031-0.202 0.205-0.35 0.41-0.35h0.345c0.899 0 1.747 0 2.185 0.511 0.261 0.307 0.34 0.761 0.241 1.388zM43.187 7.473h-4.979c-0.341 0-0.63 0.248-0.684 0.584l-2.013 12.765c-0.040 0.252 0.156 0.479 0.41 0.479h2.554c0.238 0 0.441-0.173 0.478-0.408l0.572-3.619c0.053-0.337 0.343-0.584 0.683-0.584h1.575c3.279 0 5.172-1.587 5.666-4.732 0.223-1.375 0.009-2.456-0.635-3.212-0.707-0.832-1.962-1.272-3.627-1.272z" />
                                </svg>
                            </div>
                            <div className={styles.paymentIcon}>
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 64 32"
                                >
                                    <path d="M13.043 8.356c-0.46 0-0.873 0.138-1.24 0.413s-0.662 0.681-0.885 1.217c-0.223 0.536-0.334 1.112-0.334 1.727 0 0.568 0.119 0.99 0.358 1.265s0.619 0.413 1.141 0.413c0.508 0 1.096-0.131 1.765-0.393v1.327c-0.693 0.262-1.389 0.393-2.089 0.393-0.884 0-1.572-0.254-2.063-0.763s-0.736-1.229-0.736-2.161c0-0.892 0.181-1.712 0.543-2.462s0.846-1.32 1.452-1.709 1.302-0.584 2.089-0.584c0.435 0 0.822 0.038 1.159 0.115s0.7 0.217 1.086 0.421l-0.616 1.276c-0.369-0.201-0.673-0.333-0.914-0.398s-0.478-0.097-0.715-0.097zM19.524 12.842h-2.47l-0.898 1.776h-1.671l3.999-7.491h1.948l0.767 7.491h-1.551l-0.125-1.776zM19.446 11.515l-0.136-1.786c-0.035-0.445-0.052-0.876-0.052-1.291v-0.184c-0.153 0.408-0.343 0.84-0.569 1.296l-0.982 1.965h1.739zM27.049 12.413c0 0.711-0.257 1.273-0.773 1.686s-1.213 0.62-2.094 0.62c-0.769 0-1.389-0.153-1.859-0.46v-1.398c0.672 0.367 1.295 0.551 1.869 0.551 0.39 0 0.694-0.072 0.914-0.217s0.329-0.343 0.329-0.595c0-0.147-0.024-0.275-0.070-0.385s-0.114-0.214-0.201-0.309c-0.087-0.095-0.303-0.269-0.648-0.52-0.481-0.337-0.818-0.67-1.013-1s-0.293-0.685-0.293-1.066c0-0.439 0.108-0.831 0.324-1.176s0.523-0.614 0.922-0.806 0.857-0.288 1.376-0.288c0.755 0 1.446 0.168 2.073 0.505l-0.569 1.189c-0.543-0.252-1.044-0.378-1.504-0.378-0.289 0-0.525 0.077-0.71 0.23s-0.276 0.355-0.276 0.607c0 0.207 0.058 0.389 0.172 0.543s0.372 0.36 0.773 0.615c0.421 0.272 0.736 0.572 0.945 0.9s0.313 0.712 0.313 1.151zM33.969 14.618h-1.597l0.7-3.22h-2.46l-0.7 3.22h-1.592l1.613-7.46h1.597l-0.632 2.924h2.459l0.632-2.924h1.592l-1.613 7.46zM46.319 9.831c0 0.963-0.172 1.824-0.517 2.585s-0.816 1.334-1.415 1.722c-0.598 0.388-1.288 0.582-2.067 0.582-0.891 0-1.587-0.251-2.086-0.753s-0.749-1.198-0.749-2.090c0-0.902 0.172-1.731 0.517-2.488s0.82-1.338 1.425-1.743c0.605-0.405 1.306-0.607 2.099-0.607 0.888 0 1.575 0.245 2.063 0.735s0.73 1.176 0.73 2.056zM43.395 8.356c-0.421 0-0.808 0.155-1.159 0.467s-0.627 0.739-0.828 1.283-0.3 1.135-0.3 1.771c0 0.5 0.116 0.877 0.348 1.133s0.558 0.383 0.979 0.383 0.805-0.148 1.151-0.444c0.346-0.296 0.617-0.714 0.812-1.255s0.292-1.148 0.292-1.822c0-0.483-0.113-0.856-0.339-1.12-0.227-0.264-0.546-0.396-0.957-0.396zM53.427 14.618h-1.786l-1.859-5.644h-0.031l-0.021 0.163c-0.111 0.735-0.227 1.391-0.344 1.97l-0.757 3.511h-1.436l1.613-7.46h1.864l1.775 5.496h0.021c0.042-0.259 0.109-0.628 0.203-1.107s0.407-1.942 0.94-4.388h1.43l-1.613 7.461zM13.296 20.185c0 0.98-0.177 1.832-0.532 2.556s-0.868 1.274-1.539 1.652c-0.672 0.379-1.464 0.568-2.376 0.568h-2.449l1.678-7.68h2.15c0.977 0 1.733 0.25 2.267 0.751s0.801 1.219 0.801 2.154zM8.925 23.615c0.536 0 1.003-0.133 1.401-0.399s0.71-0.657 0.934-1.174c0.225-0.517 0.337-1.108 0.337-1.773 0-0.54-0.131-0.95-0.394-1.232s-0.64-0.423-1.132-0.423h-0.624l-1.097 5.001h0.575zM18.64 24.96h-4.436l1.678-7.68h4.442l-0.293 1.334h-2.78l-0.364 1.686h2.59l-0.299 1.334h-2.59l-0.435 1.98h2.78l-0.293 1.345zM20.509 24.96l1.678-7.68h1.661l-1.39 6.335h2.78l-0.294 1.345h-4.436zM26.547 24.96l1.694-7.68h1.656l-1.694 7.68h-1.656zM33.021 23.389c0.282-0.774 0.481-1.27 0.597-1.487l2.346-4.623h1.716l-4.061 7.68h-1.814l-0.689-7.68h1.602l0.277 4.623c0.015 0.157 0.022 0.39 0.022 0.699-0.007 0.361-0.018 0.623-0.033 0.788h0.038zM41.678 24.96h-4.437l1.678-7.68h4.442l-0.293 1.334h-2.78l-0.364 1.686h2.59l-0.299 1.334h-2.59l-0.435 1.98h2.78l-0.293 1.345zM45.849 22.013l-0.646 2.947h-1.656l1.678-7.68h1.949c0.858 0 1.502 0.179 1.933 0.536s0.646 0.881 0.646 1.571c0 0.554-0.15 1.029-0.451 1.426s-0.733 0.692-1.298 0.885l1.417 3.263h-1.803l-1.124-2.947h-0.646zM46.137 20.689h0.424c0.474 0 0.843-0.1 1.108-0.3s0.396-0.504 0.396-0.914c0-0.287-0.086-0.502-0.258-0.646s-0.442-0.216-0.812-0.216h-0.402l-0.456 2.076zM53.712 20.39l2.031-3.11h1.857l-3.355 4.744-0.646 2.936h-1.645l0.646-2.936-1.281-4.744h1.694l0.7 3.11z" />
                                </svg>
                            </div>
                            <div className={styles.paymentIcon}>
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 64 32"
                                >
                                    <path d="M8.498 23.915h-1.588l1.322-5.127h-1.832l0.286-1.099h5.259l-0.287 1.099h-1.837l-1.323 5.127zM13.935 21.526l-0.62 2.389h-1.588l1.608-6.226h1.869c0.822 0 1.44 0.145 1.853 0.435 0.412 0.289 0.62 0.714 0.62 1.273 0 0.449-0.145 0.834-0.432 1.156-0.289 0.322-0.703 0.561-1.245 0.717l1.359 2.645h-1.729l-1.077-2.389h-0.619zM14.21 20.452h0.406c0.454 0 0.809-0.081 1.062-0.243s0.38-0.409 0.38-0.741c0-0.233-0.083-0.407-0.248-0.523s-0.424-0.175-0.778-0.175h-0.385l-0.438 1.682zM22.593 22.433h-2.462l-0.895 1.482h-1.666l3.987-6.252h1.942l0.765 6.252h-1.546l-0.125-1.482zM22.515 21.326l-0.134-1.491c-0.035-0.372-0.052-0.731-0.052-1.077v-0.154c-0.153 0.34-0.342 0.701-0.567 1.081l-0.979 1.64h1.732zM31.663 23.915h-1.78l-1.853-4.71h-0.032l-0.021 0.136c-0.111 0.613-0.226 1.161-0.343 1.643l-0.755 2.93h-1.432l1.608-6.226h1.859l1.77 4.586h0.021c0.042-0.215 0.109-0.524 0.204-0.924s0.406-1.621 0.937-3.662h1.427l-1.609 6.225zM38.412 22.075c0 0.593-0.257 1.062-0.771 1.407s-1.21 0.517-2.088 0.517c-0.768 0-1.386-0.128-1.853-0.383v-1.167c0.669 0.307 1.291 0.46 1.863 0.46 0.389 0 0.693-0.060 0.911-0.181s0.328-0.285 0.328-0.495c0-0.122-0.024-0.229-0.071-0.322s-0.114-0.178-0.2-0.257c-0.088-0.079-0.303-0.224-0.646-0.435-0.479-0.28-0.817-0.559-1.011-0.835-0.195-0.275-0.292-0.572-0.292-0.89 0-0.366 0.108-0.693 0.323-0.982 0.214-0.288 0.522-0.512 0.918-0.673 0.398-0.16 0.854-0.24 1.372-0.24 0.753 0 1.442 0.14 2.067 0.421l-0.567 0.993c-0.541-0.21-1.041-0.316-1.499-0.316-0.289 0-0.525 0.064-0.708 0.192-0.185 0.128-0.276 0.297-0.276 0.506 0 0.173 0.057 0.325 0.172 0.454 0.114 0.129 0.371 0.3 0.771 0.513 0.419 0.227 0.733 0.477 0.942 0.752 0.21 0.273 0.314 0.593 0.314 0.959zM41.266 23.915h-1.588l1.608-6.226h4.238l-0.281 1.082h-2.645l-0.412 1.606h2.463l-0.292 1.077h-2.463l-0.63 2.461zM49.857 23.915h-4.253l1.608-6.226h4.259l-0.281 1.082h-2.666l-0.349 1.367h2.484l-0.286 1.081h-2.484l-0.417 1.606h2.666l-0.28 1.091zM53.857 21.526l-0.62 2.389h-1.588l1.608-6.226h1.869c0.822 0 1.44 0.145 1.853 0.435s0.62 0.714 0.62 1.273c0 0.449-0.145 0.834-0.432 1.156-0.289 0.322-0.703 0.561-1.245 0.717l1.359 2.645h-1.729l-1.077-2.389h-0.619zM54.133 20.452h0.406c0.454 0 0.809-0.081 1.062-0.243s0.38-0.409 0.38-0.741c0-0.233-0.083-0.407-0.248-0.523s-0.424-0.175-0.778-0.175h-0.385l-0.438 1.682zM30.072 8.026c0.796 0 1.397 0.118 1.804 0.355s0.61 0.591 0.61 1.061c0 0.436-0.144 0.796-0.433 1.080-0.289 0.283-0.699 0.472-1.231 0.564v0.026c0.348 0.076 0.625 0.216 0.831 0.421 0.207 0.205 0.31 0.467 0.31 0.787 0 0.666-0.266 1.179-0.797 1.539s-1.267 0.541-2.206 0.541h-2.72l1.611-6.374h2.221zM28.111 13.284h0.938c0.406 0 0.726-0.084 0.957-0.253s0.347-0.403 0.347-0.701c0-0.471-0.317-0.707-0.954-0.707h-0.86l-0.428 1.661zM28.805 10.55h0.776c0.421 0 0.736-0.071 0.946-0.212s0.316-0.344 0.316-0.608c0-0.398-0.296-0.598-0.886-0.598h-0.792l-0.36 1.418zM37.242 12.883h-2.466l-0.897 1.517h-1.669l3.993-6.4h1.945l0.766 6.4h-1.548l-0.125-1.517zM37.163 11.749l-0.135-1.526c-0.035-0.381-0.053-0.748-0.053-1.103v-0.157c-0.153 0.349-0.342 0.718-0.568 1.107l-0.98 1.679h1.736zM46.325 14.4h-1.782l-1.856-4.822h-0.032l-0.021 0.14c-0.111 0.628-0.226 1.188-0.344 1.683l-0.756 3h-1.434l1.611-6.374h1.861l1.773 4.695h0.021c0.042-0.22 0.11-0.536 0.203-0.946s0.406-1.66 0.938-3.749h1.428l-1.611 6.374zM54.1 14.4h-1.763l-1.099-2.581-0.652 0.305-0.568 2.276h-1.59l1.611-6.374h1.596l-0.792 3.061 0.824-0.894 2.132-2.166h1.882l-3.097 3.052 1.517 3.322zM23.040 8.64c0-0.353-0.287-0.64-0.64-0.64h-14.080c-0.353 0-0.64 0.287-0.64 0.64v0c0 0.353 0.287 0.64 0.64 0.64h14.080c0.353 0 0.64-0.287 0.64-0.64v0zM19.2 11.2c0-0.353-0.287-0.64-0.64-0.64h-10.24c-0.353 0-0.64 0.287-0.64 0.64v0c0 0.353 0.287 0.64 0.64 0.64h10.24c0.353 0 0.64-0.287 0.64-0.64v0zM15.36 13.76c0-0.353-0.287-0.64-0.64-0.64h-6.4c-0.353 0-0.64 0.287-0.64 0.64v0c0 0.353 0.287 0.64 0.64 0.64h6.4c0.353 0 0.64-0.287 0.64-0.64v0z" />
                                </svg>
                            </div>
                            <div className={styles.paymentIcon}>
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 64 32"
                                >
                                    <path d="M32 27.099c-10.36 0-20.721 0-31.082 0-0.278 0-0.278 0-0.278-0.273 0-7.221 0-14.442 0-21.663 0-0.264 0-0.264 0.269-0.264 20.727 0 41.454 0 62.181 0 0.269 0 0.269 0 0.269 0.264 0 7.227 0 14.454-0.001 21.681 0 0.295 0.040 0.255-0.259 0.255-10.366 0.001-20.733 0.001-31.099 0.001zM6.005 7.949c0.019 0.002 0.037 0.004 0.056 0.006 0.047 0.319 0.097 0.637 0.142 0.956 0.054 0.38 0.103 0.76 0.156 1.139 0.043 0.302 0.090 0.604 0.134 0.906 0.038 0.255 0.074 0.51 0.114 0.764 0.021 0.128 0.024 0.129 0.163 0.13 0.21 0.001 0.42 0.001 0.63 0.001 0.552 0 1.105 0.001 1.656-0.001 0.147 0 0.147-0.003 0.178-0.141 0.038-0.169 0.078-0.338 0.115-0.508 0.119-0.557 0.235-1.114 0.355-1.67 0.097-0.451 0.198-0.9 0.296-1.351 0.090-0.416 0.179-0.832 0.268-1.249 0.075-0.351 0.151-0.703 0.228-1.053 0.015-0.071-0.008-0.097-0.081-0.097-0.63 0.001-1.26 0.002-1.891 0-0.086 0-0.127 0.026-0.137 0.12-0.032 0.292-0.074 0.582-0.113 0.874-0.103 0.76-0.205 1.52-0.31 2.28-0.024 0.173-0.061 0.343-0.097 0.54-0.027-0.040-0.042-0.052-0.045-0.067-0.063-0.378-0.128-0.755-0.184-1.133-0.093-0.622-0.18-1.245-0.27-1.867-0.031-0.214-0.070-0.426-0.096-0.64-0.010-0.086-0.044-0.116-0.125-0.106-0.024 0.003-0.048 0-0.072 0-0.69 0-1.381 0-2.070 0.001-0.042 0-0.087-0.008-0.125 0.005-0.034 0.011-0.070 0.040-0.086 0.070-0.020 0.035-0.019 0.081-0.025 0.122-0.040 0.285-0.079 0.57-0.121 0.854-0.053 0.355-0.113 0.71-0.166 1.065-0.067 0.45-0.127 0.901-0.195 1.352-0.017 0.116-0.051 0.229-0.077 0.343-0.054-0.141-0.088-0.28-0.107-0.42-0.060-0.427-0.113-0.855-0.17-1.282-0.088-0.659-0.179-1.318-0.267-1.976-0.017-0.128-0.014-0.131-0.15-0.131-0.612-0.001-1.224-0.001-1.837-0.001-0.132 0-0.137 0.004-0.111 0.129 0.084 0.411 0.169 0.821 0.259 1.231 0.111 0.509 0.228 1.017 0.339 1.526 0.087 0.397 0.168 0.796 0.254 1.194 0.054 0.252 0.115 0.502 0.169 0.754 0.081 0.381 0.159 0.762 0.236 1.144 0.013 0.063 0.042 0.096 0.109 0.091 0.030-0.002 0.060 0 0.090 0 0.739 0 1.476 0 2.215 0 0.036 0 0.076 0.008 0.107-0.003 0.034-0.012 0.070-0.038 0.088-0.069 0.020-0.035 0.023-0.080 0.029-0.122 0.081-0.593 0.161-1.187 0.243-1.78 0.068-0.486 0.138-0.972 0.211-1.458 0.023-0.159 0.059-0.315 0.090-0.472zM30.034 16.759c-0.015 0.001-0.030 0.003-0.045 0.004-0.052-0.125-0.108-0.25-0.154-0.377-0.117-0.327-0.229-0.655-0.343-0.983-0.251-0.717-0.502-1.434-0.753-2.15-0.046-0.131-0.051-0.14-0.19-0.141-0.864-0.001-1.728-0.001-2.592 0-0.123 0-0.126 0.003-0.127 0.135-0.002 0.234-0.001 0.468-0.001 0.702 0 1.68 0 3.36 0 5.040 0 0.172 0.001 0.174 0.165 0.174 0.534 0.001 1.068 0.001 1.602-0.001 0.138 0 0.138-0.003 0.142-0.139 0.001-0.018 0.001-0.036 0.001-0.054 0-1.044-0.001-2.088 0.001-3.132 0-0.117 0.017-0.234 0.027-0.351 0.074 0.097 0.124 0.197 0.163 0.302 0.126 0.348 0.248 0.698 0.37 1.048 0.247 0.712 0.493 1.425 0.739 2.138 0.065 0.189 0.065 0.189 0.264 0.189 0.816 0 1.632 0.001 2.448 0 0.237 0 0.22 0.031 0.22-0.223 0.001-1.746 0-3.492 0-5.238 0-0.15 0.003-0.3 0-0.45-0.003-0.136-0.006-0.14-0.143-0.14-0.54-0.001-1.080-0.001-1.62-0.001-0.156 0-0.158 0.003-0.158 0.16-0.001 1.062 0 2.124-0.001 3.185 0 0.1-0.008 0.201-0.013 0.302zM48.181 8.173c0.013-0.002 0.026-0.003 0.038-0.005 0.036 0.086 0.078 0.17 0.109 0.257 0.136 0.39 0.267 0.781 0.403 1.171 0.248 0.712 0.501 1.422 0.746 2.135 0.031 0.088 0.069 0.122 0.163 0.122 0.864-0.003 1.729-0.001 2.593-0.003 0.135 0 0.138-0.003 0.138-0.141 0.001-0.444 0.001-0.888 0.001-1.332 0-1.471 0-2.941-0.001-4.412 0-0.182-0.002-0.182-0.178-0.183-0.522-0.001-1.044-0.001-1.567 0-0.159 0.001-0.161 0.003-0.161 0.157-0.001 0.528-0.001 1.056-0.001 1.585 0 0.564 0.001 1.128-0.001 1.693 0 0.073 0.015 0.152-0.053 0.237-0.036-0.077-0.069-0.133-0.091-0.193-0.054-0.146-0.104-0.293-0.156-0.44-0.177-0.502-0.354-1.004-0.531-1.507-0.166-0.474-0.334-0.947-0.496-1.422-0.028-0.080-0.060-0.113-0.149-0.113-0.864 0.003-1.729 0.001-2.593 0.003-0.145 0-0.146 0.004-0.146 0.156 0 1.35 0 2.701-0.001 4.051 0 0.576-0.001 1.153 0.001 1.729 0 0.127 0.003 0.131 0.128 0.131 0.546 0.001 1.093 0.001 1.638 0 0.139 0 0.139-0.003 0.143-0.139 0.001-0.048 0.001-0.096 0.001-0.144-0.001-1.056-0.003-2.113-0.002-3.169 0.001-0.075 0.015-0.15 0.023-0.225zM48.184 15.484c0.013-0.001 0.026-0.003 0.040-0.004 0.048 0.127 0.097 0.253 0.143 0.381 0.13 0.36 0.261 0.72 0.387 1.082 0.237 0.684 0.47 1.37 0.709 2.053 0.058 0.167 0.021 0.168 0.24 0.168 0.822 0 1.644 0 2.467 0 0.036 0 0.072-0.001 0.108-0.001 0.058 0.001 0.091-0.024 0.092-0.084 0.001-0.030 0.001-0.060 0.001-0.090 0-1.902 0.001-3.804 0-5.707 0-0.168-0.002-0.17-0.169-0.17-0.516-0.001-1.032-0.001-1.548-0.001-0.207 0-0.189-0.012-0.189 0.2 0 1.020 0 2.040-0.001 3.060 0 0.090 0.002 0.18-0.003 0.27-0.002 0.035-0.020 0.069-0.030 0.104-0.067-0.080-0.106-0.159-0.136-0.243-0.093-0.259-0.184-0.52-0.276-0.78-0.129-0.366-0.259-0.733-0.387-1.1-0.164-0.469-0.327-0.938-0.488-1.408-0.027-0.078-0.062-0.109-0.154-0.109-0.852 0.006-1.704 0.004-2.556 0.004-0.182 0-0.183-0.001-0.183 0.175-0.001 1.902-0.002 3.804-0.002 5.707 0 0.168 0.001 0.17 0.17 0.17 0.522 0.001 1.044 0.001 1.566 0 0.173 0 0.173-0.001 0.175-0.18 0-0.036-0.001-0.072-0.001-0.108 0-1.038-0.001-2.076 0.001-3.114 0.002-0.092 0.017-0.184 0.025-0.276zM43.196 8.794c-0.001-0.012-0.001-0.024-0.001-0.036 0.094-0.037 0.188-0.074 0.282-0.11 0.449-0.175 0.749-0.479 0.847-0.964 0.057-0.282 0.042-0.557-0.024-0.836-0.085-0.364-0.305-0.614-0.622-0.793-0.197-0.111-0.411-0.172-0.63-0.198-0.297-0.037-0.596-0.067-0.895-0.070-0.792-0.010-1.584-0.003-2.376-0.003-0.312 0-0.624-0.001-0.936 0.001-0.12 0.001-0.12 0.005-0.125 0.12-0.001 0.030 0 0.060 0 0.090 0 1.866 0 3.732 0 5.599 0 0.048 0.003 0.096-0.001 0.144-0.006 0.084 0.026 0.116 0.114 0.115 0.696-0.003 1.392-0.001 2.088-0.002 0.12 0 0.122-0.006 0.127-0.119 0.002-0.042 0.001-0.084 0.001-0.126-0.003-0.606-0.005-1.212-0.010-1.818-0.001-0.084 0.032-0.125 0.117-0.119 0.149 0.011 0.3 0.012 0.446 0.037 0.198 0.034 0.314 0.159 0.346 0.361 0.042 0.272 0.083 0.545 0.129 0.816s0.094 0.542 0.15 0.811c0.033 0.157 0.040 0.157 0.203 0.157 0.66 0.001 1.32 0.001 1.98 0 0.045 0 0.092-0.007 0.146-0.012-0.010-0.053-0.016-0.094-0.026-0.134-0.121-0.472-0.179-0.953-0.237-1.435-0.027-0.22-0.053-0.441-0.102-0.656-0.093-0.41-0.342-0.675-0.768-0.755-0.075-0.014-0.148-0.043-0.222-0.065zM23.835 15.324c0.001 0 0.003 0 0.003 0 0-0.684 0.001-1.368-0.001-2.052 0-0.158-0.003-0.158-0.159-0.161-0.048-0.001-0.096 0-0.144 0-0.648 0-1.296-0.001-1.944-0.001-0.115 0-0.118 0-0.119 0.115-0.002 0.228-0.001 0.456-0.001 0.684 0 1.032 0.002 2.064-0.003 3.096-0.001 0.136-0.019 0.276-0.059 0.405-0.069 0.218-0.228 0.321-0.445 0.321-0.204 0-0.352-0.108-0.44-0.308-0.067-0.154-0.070-0.314-0.070-0.476 0-1.164 0-2.328 0-3.492 0-0.066 0.001-0.132 0-0.198-0.003-0.141-0.003-0.141-0.137-0.145-0.012-0.001-0.024 0-0.036 0-0.678 0-1.356 0-2.034-0.001-0.024 0-0.048-0.001-0.072-0.001-0.058 0.002-0.086 0.033-0.087 0.091 0 0.036-0.001 0.072-0.001 0.108 0 1.242-0.001 2.485 0.001 3.726 0 0.15 0.008 0.3 0.027 0.449 0.090 0.687 0.442 1.185 1.070 1.491 0.416 0.202 0.857 0.297 1.314 0.324 0.419 0.025 0.839 0.031 1.256-0.032 0.363-0.055 0.714-0.145 1.043-0.316 0.689-0.36 1.015-0.943 1.035-1.701 0.016-0.642 0.003-1.284 0.003-1.926zM41.254 19.312c0.579 0.011 1.094-0.076 1.582-0.298 0.428-0.195 0.779-0.488 1.045-0.874 0.349-0.507 0.502-1.085 0.545-1.69 0.035-0.492-0.006-0.981-0.142-1.459-0.158-0.556-0.448-1.032-0.895-1.399-0.411-0.338-0.898-0.523-1.418-0.597-0.523-0.074-1.049-0.072-1.571 0.049-0.651 0.15-1.194 0.454-1.606 0.998-0.269 0.354-0.426 0.748-0.527 1.167-0.095 0.392-0.109 0.796-0.084 1.198 0.045 0.719 0.23 1.389 0.712 1.951 0.241 0.282 0.53 0.502 0.867 0.653 0.488 0.219 1.002 0.32 1.492 0.301zM19.32 10.020v-0.001c-0.318 0-0.636 0-0.954 0-0.042 0-0.084 0-0.126 0.002-0.053 0.002-0.077 0.035-0.070 0.083 0.037 0.298 0.082 0.593 0.24 0.858 0.31 0.519 0.795 0.779 1.359 0.918 0.356 0.088 0.719 0.125 1.087 0.128 0.663 0.005 1.316-0.053 1.928-0.337 0.342-0.159 0.631-0.383 0.829-0.711 0.237-0.394 0.316-0.819 0.264-1.275-0.046-0.412-0.22-0.753-0.532-1.024-0.296-0.257-0.656-0.39-1.023-0.499-0.465-0.136-0.936-0.251-1.403-0.381-0.108-0.030-0.218-0.074-0.312-0.134-0.221-0.139-0.216-0.449 0.010-0.577 0.085-0.049 0.189-0.068 0.288-0.085 0.076-0.013 0.155-0.005 0.234-0.002 0.243 0.009 0.375 0.116 0.433 0.352 0.037 0.151 0.037 0.151 0.195 0.151 0.42 0 0.84 0 1.26 0 0.192 0 0.384-0.001 0.576 0.001 0.069 0.001 0.095-0.026 0.094-0.096-0.006-0.365-0.113-0.696-0.34-0.981-0.337-0.422-0.812-0.598-1.318-0.696-0.323-0.063-0.652-0.081-0.984-0.079-0.568 0.003-1.124 0.073-1.649 0.294-0.425 0.179-0.763 0.465-0.963 0.891-0.15 0.319-0.17 0.657-0.146 1.002 0.032 0.468 0.241 0.835 0.624 1.1 0.212 0.148 0.454 0.234 0.703 0.303 0.421 0.118 0.84 0.243 1.258 0.369 0.183 0.055 0.367 0.111 0.541 0.187 0.273 0.12 0.339 0.446 0.148 0.671-0.19 0.224-0.438 0.255-0.704 0.196-0.262-0.058-0.388-0.245-0.415-0.502-0.013-0.122-0.020-0.13-0.16-0.129-0.322 0.002-0.646 0.001-0.97 0.001zM32.269 8.809c0 0.822 0 1.644 0 2.466 0 0.15-0.002 0.3 0.001 0.45 0.002 0.12 0.004 0.121 0.117 0.125 0.042 0.001 0.084 0.001 0.126 0.001 1.35 0 2.7 0 4.050 0 0.084 0 0.168 0.002 0.252-0.001 0.119-0.003 0.123-0.004 0.125-0.122 0.003-0.192 0.001-0.384 0.001-0.576 0-0.24 0.001-0.48-0.001-0.72-0.001-0.115-0.004-0.116-0.123-0.12-0.036-0.001-0.072 0-0.108 0-0.642 0-1.284 0-1.926 0-0.048 0-0.096-0.002-0.144 0-0.075 0.003-0.108-0.032-0.107-0.108 0.003-0.12-0.001-0.24 0-0.36 0.003-0.292-0.035-0.262 0.256-0.262 0.57-0.001 1.14 0 1.71-0.001 0.171-0.001 0.173-0.003 0.173-0.17 0.001-0.216 0.001-0.432 0.001-0.648 0-0.198 0.001-0.396-0.001-0.594-0.002-0.126-0.006-0.127-0.134-0.133-0.030-0.001-0.060 0-0.090 0-0.564 0-1.128 0-1.692 0-0.042 0-0.084-0.001-0.126 0-0.069 0.001-0.097-0.035-0.097-0.101 0.001-0.15-0.002-0.3 0-0.45 0.002-0.139 0.003-0.142 0.139-0.143 0.288-0.002 0.576-0.001 0.864-0.001 0.39 0 0.78 0.001 1.17-0.001 0.139-0.001 0.159-0.016 0.16-0.134 0.003-0.432 0.003-0.864 0-1.296-0.001-0.115-0.016-0.123-0.124-0.129-0.024-0.001-0.048 0.001-0.072 0.001-1.398 0-2.795-0.001-4.194-0.001-0.212 0-0.207-0.026-0.207 0.201 0.001 0.942 0.001 1.884 0.001 2.826zM11.983 8.815v0c-0.001 0.192-0.001 0.384-0.001 0.576 0 0.768-0.001 1.536 0.001 2.304 0 0.153 0.003 0.156 0.146 0.156 1.458 0.001 2.916 0.001 4.374 0 0.14 0 0.142-0.003 0.143-0.138 0.002-0.336 0.001-0.672 0.001-1.008 0-0.096-0.003-0.192 0-0.288 0.002-0.077-0.033-0.109-0.108-0.104-0.042 0.003-0.084 0-0.126 0-0.564 0-1.128 0-1.692 0-0.12 0-0.24-0.003-0.36 0-0.077 0.002-0.107-0.034-0.106-0.109 0.002-0.12-0.003-0.24-0.001-0.36 0.003-0.295-0.037-0.261 0.255-0.262 0.576-0.002 1.152 0 1.728-0.003 0.168-0.001 0.172-0.007 0.173-0.174 0.001-0.402 0.001-0.804-0.001-1.206-0.001-0.158-0.005-0.158-0.163-0.162-0.030-0.001-0.060 0-0.090 0-0.558 0-1.116 0-1.674 0-0.042 0-0.084-0.001-0.126-0.001-0.065 0.001-0.101-0.026-0.101-0.095 0.001-0.174 0.001-0.348 0.001-0.522 0-0.051 0.024-0.079 0.075-0.079 0.036-0.001 0.072 0.002 0.108 0.002 0.654 0 1.308 0.001 1.962 0.001 0.172 0 0.172-0.001 0.173-0.182 0.001-0.318 0-0.636 0-0.954 0-0.102-0.002-0.204 0.001-0.306 0.002-0.084-0.036-0.122-0.119-0.118-0.030 0.001-0.060 0-0.090 0-1.392 0-2.784 0-4.176 0-0.036 0-0.072 0.003-0.108 0-0.070-0.005-0.097 0.033-0.098 0.097 0 0.042-0.001 0.084-0.001 0.126 0.002 0.937 0.002 1.873 0.002 2.809zM27.949 5.783c-0.042 0-0.084 0-0.126 0-0.792 0-1.584 0.001-2.376 0-0.239 0-0.193 0.024-0.193 0.199-0.002 0.42-0.002 0.84-0.001 1.26 0.001 0.139 0.003 0.142 0.141 0.143 0.372 0.002 0.744 0.001 1.116 0.001 0.275 0 0.254-0.021 0.254 0.251 0 1.35 0 2.699 0 4.049 0 0.164 0.001 0.165 0.166 0.165 0.654 0.001 1.308 0.001 1.962 0 0.259-0.001 0.238 0.028 0.238-0.246 0-1.338-0.001-2.675-0.001-4.013 0-0.205 0.001-0.206 0.209-0.207 0.378-0.001 0.756 0.001 1.134-0.001 0.157-0.001 0.167-0.008 0.168-0.16 0.003-0.438 0.002-0.875 0-1.314-0.001-0.12-0.005-0.122-0.119-0.127-0.042-0.002-0.084-0.001-0.126-0.001-0.814 0.001-1.63 0.001-2.446 0.001zM36.364 16.147c0-0.931 0-1.861 0-2.791 0-0.036 0.001-0.072 0-0.108-0.003-0.132-0.004-0.132-0.127-0.137-0.030-0.001-0.060 0-0.090 0-0.643 0-1.285 0-1.927 0-0.242 0-0.224-0.019-0.224 0.223 0 1.873 0 3.746 0 5.619 0 0.036 0.001 0.072 0.001 0.108 0.001 0.065 0.030 0.101 0.098 0.101 0.042 0 0.084 0.001 0.126 0.001 0.595 0 1.188 0 1.783 0 0.084 0 0.168-0.005 0.252 0.001 0.090 0.006 0.118-0.035 0.109-0.117-0.003-0.029-0.001-0.060-0.001-0.090 0-0.936 0-1.873 0-2.81zM54.108 12.38c0 2.058 0 4.116 0 6.175 0 0.138 0.004 0.276 0.001 0.414-0.002 0.083 0.026 0.121 0.114 0.118 0.126-0.005 0.252 0 0.378-0.001 0.236-0.002 0.223 0.031 0.223-0.222 0-4.296 0-8.593 0.001-12.889 0-0.054-0.003-0.108 0-0.162 0.004-0.074-0.025-0.109-0.104-0.108-0.168 0.003-0.336 0.003-0.504-0.001-0.079-0.002-0.107 0.032-0.106 0.106 0.001 0.15-0.002 0.3-0.002 0.449-0.001 2.040-0.001 4.081-0.001 6.12zM59.541 12.452c0 2.131 0 4.262 0 6.393 0 0.030-0.001 0.060 0 0.090 0.004 0.12 0.004 0.123 0.118 0.124 0.156 0.002 0.312 0.001 0.468-0.001 0.118-0.002 0.119-0.005 0.123-0.12 0.001-0.030 0-0.060 0-0.090 0-4.22 0-8.44 0-12.659 0-0.060 0-0.12-0.001-0.18-0.003-0.17-0.003-0.17-0.164-0.172-0.108-0.001-0.216-0.001-0.324-0.001-0.263-0.001-0.22-0.005-0.22 0.224-0.001 2.131-0.001 4.261-0.001 6.392zM62.523 6.538c0.016-0.415-0.323-0.785-0.761-0.785-0.465 0-0.783 0.339-0.783 0.762 0 0.424 0.276 0.765 0.762 0.788 0.42 0.021 0.779-0.342 0.782-0.764zM41.051 7.724c0-0.156 0.003-0.312-0.001-0.468-0.002-0.084 0.029-0.124 0.115-0.117 0.167 0.013 0.336 0.013 0.501 0.042 0.232 0.040 0.374 0.193 0.404 0.401 0.040 0.278-0.061 0.519-0.278 0.632-0.208 0.108-0.435 0.123-0.665 0.113-0.065-0.003-0.075-0.047-0.075-0.099 0-0.168 0-0.335 0-0.503zM40.623 16.141c0.035-0.351 0.065-0.701 0.109-1.051 0.013-0.104 0.058-0.207 0.102-0.304 0.092-0.205 0.264-0.284 0.479-0.284 0.219 0 0.387 0.093 0.467 0.3 0.060 0.155 0.114 0.317 0.135 0.481 0.063 0.488 0.075 0.979 0.021 1.469-0.019 0.172-0.047 0.343-0.080 0.513-0.015 0.075-0.047 0.148-0.081 0.218-0.097 0.198-0.26 0.289-0.479 0.285s-0.374-0.1-0.469-0.3c-0.123-0.261-0.15-0.54-0.169-0.821-0.011-0.167-0.002-0.335-0.002-0.503-0.012-0.001-0.023-0.001-0.034-0.003zM61.061 6.532c-0.006-0.391 0.292-0.714 0.68-0.714 0.403 0 0.691 0.291 0.694 0.696 0.005 0.43-0.282 0.724-0.685 0.723-0.402-0.001-0.67-0.282-0.69-0.705zM61.879 6.57c0.054-0.019 0.088-0.030 0.12-0.044 0.107-0.044 0.164-0.131 0.155-0.234-0.010-0.106-0.083-0.184-0.201-0.193-0.137-0.010-0.275-0.004-0.412-0.005-0.062-0.001-0.084 0.031-0.083 0.089 0.003 0.125 0.004 0.251 0.005 0.376 0 0.108-0.005 0.215-0.002 0.323 0.001 0.024 0.026 0.046 0.040 0.069 0.015-0.021 0.042-0.041 0.044-0.063 0.006-0.071 0.001-0.143 0.005-0.215 0.005-0.109 0.019-0.118 0.126-0.122 0.079-0.003 0.122 0.038 0.158 0.096 0.054 0.086 0.105 0.174 0.16 0.259 0.028 0.044 0.063 0.069 0.12 0.028-0.076-0.118-0.15-0.233-0.234-0.365zM61.76 6.144c0.053 0.005 0.113 0.009 0.172 0.018 0.075 0.012 0.115 0.065 0.122 0.135 0.008 0.077-0.020 0.15-0.105 0.163-0.111 0.018-0.224 0.023-0.336 0.026-0.019 0.001-0.055-0.034-0.057-0.054-0.008-0.077-0.008-0.155-0.002-0.232 0.001-0.020 0.035-0.049 0.058-0.053 0.045-0.009 0.094-0.003 0.148-0.003z" />
                                </svg>
                            </div>
                        </div>{" "}
                    </div>
                    <ul>
                        <li>
                            <Link href="/help">Help</Link>
                        </li>
                        <li>
                            <Link href="/company">Company</Link>
                        </li>
                        <li>
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                    <div className={styles.copyright}>
                        Copyright 2024 © <strong>Shah Parts Japan</strong>{" "}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
