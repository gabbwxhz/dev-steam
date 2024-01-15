import Head from 'next/head'

import Navbar from '@/components/navbar/Navbar'

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
    </>
  )
}
