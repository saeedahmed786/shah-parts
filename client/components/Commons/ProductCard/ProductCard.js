import Image from 'next/image'
import { ButtonWithHoverComp } from '../ButtonWithHoverComp/ButtonWithHoverComp'
import styles from './ProductCard.module.css'

export const ProductCard = ({ product }) => {
  return (
    <div className={styles.ProductCard}>
      <Image width={100} height={100} quality={100} src={product?.pictures[0]} />
      <div className='p-3'>
        <h2>{product?.title}</h2>
        <p>From ${product?.price}</p>
        <ButtonWithHoverComp text="Add To Cart" />
      </div>
    </div>
  )
}
