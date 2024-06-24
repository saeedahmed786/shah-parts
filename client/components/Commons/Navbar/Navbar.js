import { useCartContext } from '@/context/CartContext';
import { useGlobalContext } from '@/context/GlobalContext';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import Link from 'next/link';
import React from 'react'
import Logo from '../Logo/Logo';
import styles from './Navbar.module.css';
import SearchForm from './SearchForm/SearchForm';

const Navbar = () => {
    const { userAuth } = useGlobalContext();
    const { cart } = useCartContext();


    return (
        <nav className={styles.Navbar}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                {/* <div className="flex items-center gap-3">
                    <Divider type='vertical' />
                    <div>
                        <ButtonWithHoverComp text="Popular Auto Parts" />
                    </div>
                    <div className={styles.ovisBtn}>
                        <ButtonComp text="OVIS" />
                    </div>
                </div> */}
            </div>
            <div className="flex items-center gap-10">
                <Link href="/">
                    Home
                </Link>
                <Link href="/about">
                    About
                </Link>
                <Link href="/contact">
                    Contact
                </Link>
            </div>
            <div className={styles.right}>
                <SearchForm />
                {
                    userAuth?.role === 1 &&
                    <Link href="/admin/products">
                        Dashboard
                    </Link>
                }
                <Link href="/login" className={styles.accountBtn}>
                    <UserOutlined className='text-[23px]' />
                </Link>
                <Link href="/cart" className="flex gap-2 items-center">
                    <Badge count={cart?.length}>
                        <ShoppingCartOutlined className='text-[23px]' />
                    </Badge>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
