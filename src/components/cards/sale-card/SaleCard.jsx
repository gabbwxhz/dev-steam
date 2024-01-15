import Image from 'next/image'

import styles from './SaleCard.module.css'
import Button from '@/components/button/Button'

export default function SaleCard() {
  return (
    <div className={styles.saleCard}>
      <Image src="/products/mordhau.jpg" width={250} height={300} />

      <div className={styles.info}>
        <h3 className={styles.title}>OFERTA EXCLUSIVA</h3>

        <div className={styles.priceCard}>
          <div className={styles.percent}>- 20%</div>
          <div className={styles.price}>
            <p className={styles.fullPrice}>R$99,90</p>
            <h4 className={styles.discountPrice}>R$79,90</h4>
          </div>
        </div>

        <Button fullWidth>Adicionar ao Carrinho</Button>
      </div>
    </div>
  )
}
