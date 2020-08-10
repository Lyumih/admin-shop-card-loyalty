import Head from 'next/head'
import { FC } from 'react'
import Home from '../components/templates/Home/Home'

const HomePage: FC = () => {
  return (
    <div>
      <Head>
        <title>Карты Лояльности</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
      
    </div>
  )
}

export default HomePage