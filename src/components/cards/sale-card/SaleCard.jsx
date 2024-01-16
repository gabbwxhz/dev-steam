import Image from 'next/image'

import styles from './SaleCard.module.css'
import Button from '@/components/button/Button'

export default function SaleCard({ image, discount, fullPrice, discountPrice, onAdd }) {
  return (
    <div className={styles.saleCard}>
      <Image src={`/products/${image}`} alt={`produto ${image}`} width={250} height={330} />

      <div className={styles.info}>
        <h3 className={styles.title}>OFERTA EXCLUSIVA</h3>

        <div className={styles.priceCard}>
          <div className={styles.percent}>-{discount}</div>
          <div className={styles.price}>
            <p className={styles.fullPrice}>{`R$${fullPrice}`}</p>
            <h4 className={styles.discountPrice}>{`R$${discountPrice}`}</h4>
          </div>
        </div>

        <Button onClick={onAdd} fullWidth>
          Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  )
}
