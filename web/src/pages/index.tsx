import Head from "next/head";
import Image from "next/image";

import logoImg from '../../public/logo.svg'
import styles from '../../styles/home.module.scss'
export default function Home() {
  return (
    <>
      <Head>
        <title>NOXOS - Faça seu Login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo noxos"/>
        <div className={styles.login}></div>
      </div>
    </>
  );
}
