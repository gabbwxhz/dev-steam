import styles from './CartOption.module.css'
import Image from 'next/image'

export default function CartOption({ image, name, price, onRemove }) {
  return (
    <div className={styles.option}>
      <Image src={`/products/${image}`} alt={`produto ${image}`} width={62} height={74} />
      <div className={styles.info}>
        <h3 className={styles.title}>{name}</h3>
        <h3 className={styles.price}>R${price}</h3>
        <p className={styles.remove} onClick={onRemove}>
          Remover
        </p>
      </div>
    </div>
  )
}
