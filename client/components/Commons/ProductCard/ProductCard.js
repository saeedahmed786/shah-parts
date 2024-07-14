import { useCartContext } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { ButtonComp } from '../ButtonComp/ButtonComp'
import styles from './ProductCard.module.css'

export const ProductCard = ({ product }) => {
  const { addToCart } = useCartContext();

  const handleAddToCart = async () => {
    product.qtyToShop = 1;
    addToCart(product);
  }

  return (
    <div className={styles.ProductCard}>
      <Link href={`/product/${product?._id}`}>
        <Image width={100} height={100} quality={100} src={product?.Pictures[0]} />
      </Link>
      <ButtonComp text="Add To Cart" onClick={handleAddToCart} />
      <div className='p-3'>
        <h2>{product?.Title}</h2>
        <p>${product?.Price}</p>
      </div>
    </div>
  )
}
