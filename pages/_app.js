import { Provider } from "react-redux";
import initStore from "../store";
import "../styles/globals.css";
import "antd/dist/antd.css";

export default function MyApp({ Component, pageProps, store }) {
  return (
    <Provider store={initStore()}>
      <Component {...pageProps} />
    </Provider>
  );
}
