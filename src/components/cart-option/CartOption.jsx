import styles from './CartOption.module.css'
import Image from 'next/image'

export default function CartOption() {
  return (
    <div className={styles.option}>
      <Image src={`/products/mordhau.jpg`} width={62} height={74} />
      <div className={styles.info}>
        <h3 className={styles.title}>Katana Zero</h3>
        <h3 className={styles.price}>R$ 99,99</h3>
        <p className={styles.remove}>Remover</p>
      </div>
    </div>
  )
}
