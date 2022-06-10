import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { UserContext, UserDispatchContext } from '../util/appContext';
import { useContext, useState } from 'react';
import AddWallet from '../components/AddWallet'

export default function Home() {
  const {setModal } = useContext(UserDispatchContext);

  return (
    <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
      <Head>
        <title>Walletspy - Tracker for Crypto Wallets</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <img src={`${process.env.BASE_PATH}/logo.png`} />
        <h1 className={styles.title}>
          Walletspy
        </h1>

        <p className={styles.description}>
          Get started by adding wallets to watch.
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>
        <button onClick={()=>{
          setModal(<AddWallet />);
        }}>Add Wallet</button>

        {/* <div className={styles.grid}>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://prnth.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} farts
        </a>
      </footer>
    </div>
  )
}
