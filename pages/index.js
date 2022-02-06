import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>NinjaLIst | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime sit nisi natus saepe hic facere. Voluptatum error reiciendis perferendis autem commodi consequuntur voluptas atque, sunt, tempora officiis, quos voluptatem ratione.</p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See the ninja list</a>
        </Link>
      </div>
    </>
  )
}
