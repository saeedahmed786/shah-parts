import Image from 'next/image'
import Link from 'next/link'
import styles from './RelatedProductCard.module.css'

export const RelatedProductCard = ({ product }) => {

  return (
    <div className={styles.RelatedProductCard}>
      <Link href={`/product/${product?._id}`}>
        <Image width={100} height={100} quality={100} src={product?.Pictures[0]} alt={product?.Title} />
      </Link>
      <div className={styles.rightPart}>
        <h2>{product?.Title}</h2>
        <p>${product?.Price}</p>
      </div>
    </div>
  )
}
