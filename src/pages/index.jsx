import { useState } from 'react'
import Head from 'next/head'

import styles from '@/styles/index.module.css'
import Navbar from '@/components/navbar/Navbar'
import Subtitle from '@/components/tipography/subtitle/Subtitle'
import Container from '@/components/container/Container'
import SaleCard from '@/components/cards/sale-card/SaleCard'
import GameCard from '@/components/cards/game-card/GameCard'

export default function Home() {
  const [cart, setCart] = useState([])

  const handleAddProduct = (info) => {
    setCart([...cart, info])
  }

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos))
  }

  return (
    <>
      <Head>
        <title>DevSteam</title>
        <meta name="description" content="DevSteam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar cart={cart} onRemove={handleRemoveProduct} />

      <Container>
        <div className={styles.session}>
          <Subtitle>Promoções</Subtitle>

          <div className={styles.saleContainer}>
            <SaleCard
              image={'mordhau.jpg'}
              discount={'30%'}
              fullPrice={'88,99'}
              discountPrice={'62,23'}
              onAdd={() =>
                handleAddProduct({ name: 'Mordhau', price: 62.23, image: 'mordhau.jpg' })
              }
            />
            <SaleCard
              image={'little-nightmares-ii.webp'}
              discount={'18%'}
              fullPrice={'127,45'}
              discountPrice={'104,50'}
              onAdd={() =>
                handleAddProduct({
                  name: 'Little Nightmares II',
                  price: 104.5,
                  image: 'little-nightmares-ii.webp'
                })
              }
            />
            <SaleCard
              image={'ac-black-flag.webp'}
              discount={'80%'}
              fullPrice={'119,99'}
              discountPrice={'23,99'}
              onAdd={() =>
                handleAddProduct({
                  name: `Assassin's Creed IV: Black Flag`,
                  price: 23.99,
                  image: 'ac-black-flag.webp'
                })
              }
            />
          </div>
        </div>

        <div className={styles.session}>
          <Subtitle>Outros Jogos</Subtitle>

          <div className={styles.gamesContaienr}>
            <GameCard
              image={'katana-zero.jpg'}
              name={'katana zero'}
              info={'gráficos pixelados, ação, plataforma'}
              price={'46,99'}
              onAdd={() =>
                handleAddProduct({
                  name: 'Katana Zero',
                  price: 46.99,
                  image: 'katana-zero-cart.jpg'
                })
              }
            />
            <GameCard
              image={'slime-rancher-2.jpg'}
              name={'Slime Rancher 2'}
              info={'fofo, colorido, relaxante'}
              price={'89,99'}
              onAdd={() =>
                handleAddProduct({
                  name: 'slime rancher 2',
                  price: 89.99,
                  image: 'slime-rancher-2-cart.jpg'
                })
              }
            />
            <GameCard
              image={'ghost-reecon.jpg'}
              name={`Tom Clancy's Ghost Recon® Wildlands`}
              info={'mundo aberto, tiroteio, cooperativo'}
              price={'138,00'}
              onAdd={() =>
                handleAddProduct({
                  name: `Tom Clancy's Ghost Recon® Wildlands`,
                  price: 138.0,
                  image: 'ghost-reecon-cart.jpg'
                })
              }
            />
          </div>
        </div>
      </Container>
    </>
  )
}
