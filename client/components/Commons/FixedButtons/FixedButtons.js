import React from 'react'
import styles from "./FixedButtons.module.css"
import Link from 'next/link';
import Image from 'next/image';

const FixedButtons = () => {
    return (
        <div className={styles.FixedButtons}>
            <Link className="whatsapp-banner" target="_blank" href="https://wa.me/81782006655">
                <Image className='h-[110px] object-contain' src="/assets/whatsapp.jpg" alt="WhatsApp Banner" width={64} height={64} />
            </Link>
            <Link className="whatsapp-banner" target="_blank" href="https://shahparts.com/product-category/brand/toyota">
                <Image className='h-[110px] object-contain' src="/assets/facebook.png" alt="Facebook Banner" width={64} height={64} />
            </Link>
        </div>
    )
}

export default FixedButtons
