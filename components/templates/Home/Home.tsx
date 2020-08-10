import { FC } from "react";
import { Layout, List } from "antd"
import { PAGE_LINKS } from "../../../constants";
import Link from "next/link"
import { styles } from "../styles";

const {Header, Content} = Layout

const Home: FC = () => {
  return (
    <Layout>
      <Content style={styles.container}>
        <h1>Карты лояльности</h1>
        <List
          dataSource={PAGE_LINKS}
          renderItem={item => (
            <List.Item>
              <Link href={item.href}>
                <a>{item.label}</a>
              </Link>
            </List.Item>
          )}
        >
          
        </List>
      </Content>
    </Layout>
  )
}

export default Home