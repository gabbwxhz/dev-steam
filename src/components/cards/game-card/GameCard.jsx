import Image from 'next/image'

import styles from './GameCard.module.css'
import Button from '@/components/button/Button'

export default function GameCard({ image, name, info, price }) {
  return (
    <div className={styles.gameCard}>
      <Image
        className={styles.image}
        src={`/products/${image}`}
        alt={`produto ${image}`}
        width={350}
        height={150}
      />

      <div className={styles.info}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.category}>{info}</p>
        <div className={styles.pricing}>
          <h2 className={styles.price}>{`R$${price}`}</h2>
          <Button>Adicionar ao carrinho</Button>
        </div>
      </div>
    </div>
  )
}
