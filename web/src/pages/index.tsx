import { useContext, FormEvent } from "react";
import Head from "next/head";
import Image from "next/image";

import logoImg from "../../public/logo.svg";
import styles from "../../styles/home.module.scss";
import { Input, TextArea } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

import Link from "next/link";

import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
  const { signIn } = useContext(AuthContext);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();


    
    let data = {
      email: "elvis@gmail.com ",
      password: "123123",
    };

     await signIn(data);
  }

  return (
    <>
      <Head>
        <title>NOXOS - Faça seu Login</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image className={styles.logo} src={logoImg} alt="Logo noxos" />

        <div className={styles.login}>
          <form onSubmit={()=>handleLogin}>
            <Input placeholder="Digite Seu Email" type="email" />

            <Input placeholder="Digite Sua Senha" type="password" />

            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>
          <Link href="/signup" legacyBehavior>
            <a className={styles.text}>Cadastrar-se</a>
          </Link>
        </div>
      </div>
    </>
  );
}
