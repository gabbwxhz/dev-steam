import Image from 'next/image'

import styles from './GameCard.module.css'
import Button from '@/components/button/Button'

export default function GameCard() {
  return (
    <div className={styles.gameCard}>
      <Image className={styles.image} src="/products/katana-zero.jpg" width={350} height={145} />

      <div className={styles.info}>
        <h3 className={styles.title}>katana zero</h3>
        <p className={styles.category}>Gráficos Pixelados, Ação, Plataforma</p>
        <div className={styles.pricing}>
          <h2 className={styles.price}>R$99,90</h2>
          <Button>Adicionar ao carrinho</Button>
        </div>
      </div>
    </div>
  )
}
