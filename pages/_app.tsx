import { AppProps } from "next/app";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
