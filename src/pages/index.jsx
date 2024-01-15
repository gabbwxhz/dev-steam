import Head from 'next/head'

import styles from '@/styles/index.module.css'
import Navbar from '@/components/navbar/Navbar'
import Subtitle from '@/components/tipography/subtitle/Subtitle'
import Container from '@/components/container/Container'
import SaleCard from '@/components/cards/sale-card/SaleCard'
import GameCard from '@/components/cards/game-card/GameCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam</title>
        <meta name="description" content="DevSteam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Container>
        <div className={styles.session}>
          <Subtitle>Promoções</Subtitle>

          <div className={styles.saleContainer}>
            <SaleCard />
            <SaleCard />
            <SaleCard />
          </div>
        </div>

        <div className={styles.session}>
          <Subtitle>Outros Jogos</Subtitle>

          <div>
            <GameCard />
          </div>
        </div>
      </Container>
    </>
  )
}
