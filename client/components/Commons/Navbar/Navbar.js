import Link from 'next/link';
import React from 'react'
import { isAuthenticated } from '../Auth/Auth';
import Logo from '../Logo/Logo';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.right}>
                {
                    isAuthenticated()?.role === 1 &&
                    <Link href="/admin/dashboard">
                        Dashboard
                    </Link>
                }
                <Link href="/login" className={styles.accountBtn}>
                    <i className="fa-solid fa-user"></i>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
