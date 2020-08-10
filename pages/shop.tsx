import { FC } from "react";
import Shop, { ShopProps } from "../components/templates/Shop/Shop";
import Head from "next/head";

const ShopPage: FC = () => {
  const shop: ShopProps = {
    shopRegistrationForm: {
      onFinish: (value) => {
        console.log(value)
      }
    }
  }
  return (
    <div>
      <Head>
        <title>Карты Лояльности</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Shop {...shop}/>
    </div>
  );
}

export default ShopPage