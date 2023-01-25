import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import HomeContainer from '@/components/Home/Home'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Тату Рязань</title>
      </Head>
      <HomeContainer />
    </div>
  )
}
