import { useContext, FormEvent } from "react";

import Head from "next/head";
import Image from "next/image";

import logoImg from "../../../public/logo.svg";
import styles from "../../../styles/home.module.scss";
import { Input, TextArea } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

import Link from "next/link";
// import { AuthContext } from "@/src/contexts/AuthContext";

export default function SignUp() {
  // const { signIn } = useContext(AuthContext);

  // async function handleSignUp(event: FormEvent) {
  //   event.preventDefault();

  //   let data = {
  //     password: "123123",
  //     email: "elvis@elvis.com",
  //   };
  //   await signIn(data);
  // }

  return (
    <>
      <Head>
        <title>NOXOS - Faça seu cadastro</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image className={styles.logo} src={logoImg} alt="Logo noxos" />

        <div className={styles.login}>
          <h1>Criando sua conta!</h1>
          <form>
            <Input placeholder="Seu Nome" type="text" />

            <Input placeholder="Seu Email" type="email" />

            <Input placeholder="Sua Senha" type="password" />

            <Button type="submit" loading={false}>
              Cadastrar
            </Button>
          </form>
          <Link href="/" legacyBehavior>
            <a className={styles.text}>Voltar</a>
          </Link>
        </div>
      </div>
    </>
  );
}
