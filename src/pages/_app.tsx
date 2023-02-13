import "@/styles/globals.css";
import "@/styles/reset.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/config/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
