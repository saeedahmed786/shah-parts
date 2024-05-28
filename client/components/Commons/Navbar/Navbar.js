import { useGlobalContext } from '@/context/GlobalContext';
import { UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react'
import Logo from '../Logo/Logo';
import styles from './Navbar.module.css';

const Navbar = () => {
    const { userAuth } = useGlobalContext();


    return (
        <nav className={styles.Navbar}>
            <div className={styles.logo}>
                <Logo />
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
            </div>
        </nav>
    )
}

export default Navbar
