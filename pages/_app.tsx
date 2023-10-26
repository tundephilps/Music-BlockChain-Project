import { AppProps } from "next/app";

import "../styles/globals.scss";
import DefaultLayout from "@/components/DefaultLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
