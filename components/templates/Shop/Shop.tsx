import { FC } from "react"
import { Layout } from "antd";
import { styles } from "../styles";
import ShopRegistrationForm, { ShopRegistrationFormProps } from "../../organisms/ShopRegistrationForm/ShopRegistrationShop";

const { Content } = Layout

export interface ShopProps {
  shopRegistrationForm: ShopRegistrationFormProps
}

const Shop: FC<ShopProps> = ({shopRegistrationForm}) => {
  return (
    <Layout>
      <Content style={styles.container}>
        <h1>Магазин</h1>
        <ShopRegistrationForm {...shopRegistrationForm}/>
      </Content>
    </Layout>
  );
}

export default Shop