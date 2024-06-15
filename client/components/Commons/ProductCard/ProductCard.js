import Image from 'next/image'
import { ButtonComp } from '../ButtonComp/ButtonComp'
import styles from './ProductCard.module.css'

export const ProductCard = ({ product }) => {
  return (
    <div className={styles.ProductCard}>
      <Image width={100} height={100} quality={100} src={product?.pictures[0]} />
      <ButtonComp text="Add To Cart" />
      <div className='p-3'>
        <h2>{product?.title}</h2>
        <p>${product?.price}</p>
      </div>
    </div>
  )
}
