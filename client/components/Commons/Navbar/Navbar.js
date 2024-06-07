import { useGlobalContext } from '@/context/GlobalContext';
import { ShoppingCartOutlined, ShoppingFilled, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Badge, Divider } from 'antd';
import Link from 'next/link';
import React from 'react'
import { ButtonComp } from '../ButtonComp/ButtonComp';
import { ButtonWithHoverComp } from '../ButtonWithHoverComp/ButtonWithHoverComp';
import Logo from '../Logo/Logo';
import styles from './Navbar.module.css';
import SearchForm from './SearchForm/SearchForm';

const Navbar = () => {
    const { userAuth } = useGlobalContext();


    return (
        <nav className={styles.Navbar}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <div className="flex items-center gap-3">
                    <SearchForm />
                    <Divider type='vertical' />
                    <div>
                        <ButtonWithHoverComp text="Popular Auto Parts" />
                    </div>
                    <div className={styles.ovisBtn}>
                        <ButtonComp text="OVIS" />
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                {
                    userAuth?.role === 1 &&
                    <Link href="/admin/products">
                        Dashboard
                    </Link>
                }
                <Link href="/login" className={styles.accountBtn}>
                    <UserOutlined />
                </Link>
                <Divider type='vertical' className='h-[30px]' />
                <Link href="/cart" className="flex gap-2 items-center">
                    <div>Cart / 0.00$</div>
                    <Badge count={5}>
                        <ShoppingOutlined className='text-[23px]' />
                    </Badge>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
