import { FC } from "react"
import { Layout, Alert } from "antd";
import { styles } from "../styles";
import ShopRegistrationForm, { ShopRegistrationFormProps } from "../../organisms/ShopRegistrationForm/ShopRegistrationForm";

const { Content } = Layout

export interface ShopProps {
  shopRegistrationForm: ShopRegistrationFormProps,
  errorMessage: string,
  successMessage: string
}

const Shop: FC<ShopProps> = ({shopRegistrationForm, successMessage, errorMessage}) => {
  return (
    <Layout>
      <Content style={styles.container}>
        <h1>Регистрация магазина</h1>
        {errorMessage && (
          <Alert
            type="error"
            style={{ margin: "20px 0" }}
            message={errorMessage}
          />
        )}
        {successMessage && (
          <Alert
            type="success"
            style={{ margin: "20px 0" }}
            message={successMessage}
          />
        )}
        <ShopRegistrationForm {...shopRegistrationForm} />
      </Content>
    </Layout>
  );
}

export default Shop