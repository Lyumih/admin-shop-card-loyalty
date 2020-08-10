import { FC, useState } from "react";
import Shop, { ShopProps } from "../components/templates/Shop/Shop";
import Head from "next/head";
import { userPostFetchHelper } from "../helpers/api/registration";

const ShopPage: FC = () => {

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  

  const shop: ShopProps = {
    shopRegistrationForm: {
      onFinish: async (value) => {
        clean()
        console.log(value);
        try {
          const result = await userPostFetchHelper(value);
          console.log(result)
          if (result && !result.message) {
            setSuccessMessage("Регистрация прошла успешно!")
          }
          else {
            setErrorMessage(""+result.message)
          }

        } catch (e) {
          console.log(e)
        }

      },
    },
    errorMessage,
    successMessage
  };

  const clean = () => {
    setErrorMessage("")
    setSuccessMessage("")
  }
  
  return (
    <div>
      <Head>
        <title>Карты Лояльности</title>
      </Head>
      <Shop {...shop}/>
    </div>
  );
}

export default ShopPage