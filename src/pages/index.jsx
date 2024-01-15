import Head from 'next/head'

import Navbar from '@/components/navbar/Navbar'
import Subtitle from '@/components/tipography/subtitle/Subtitle'
import Container from '@/components/container/Container'
import SaleCard from '@/components/cards/sale-card/SaleCard'

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
        <div>
          <Subtitle>Promoções</Subtitle>

          <div>
            <SaleCard />
          </div>
        </div>

        <div>
          <Subtitle>Outros Jogos</Subtitle>
        </div>
      </Container>
    </>
  )
}
