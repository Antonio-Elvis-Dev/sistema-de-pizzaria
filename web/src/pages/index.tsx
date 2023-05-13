import Head from "next/head";
import Image from "next/image";

import logoImg from "../../public/logo.svg";
import styles from "../../styles/home.module.scss";
import { Input, TextArea } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>NOXOS - Faça seu Login</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image className={styles.logo} src={logoImg} alt="Logo noxos" />

        <div className={styles.login}>
          <form>
            <Input placeholder="Digite Seu Email" type="email" />

            <Input placeholder="Digite Sua Senha" type="password" />

            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>
          <Link href="/signup" legacyBehavior >
            <a className={styles.text}>Cadastrar-se</a>
          </Link>
        </div>
      </div>
    </>
  );
}
