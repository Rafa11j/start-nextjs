import { AppProps } from "next/dist/next-server/lib/router/router";
import GlobalStyles from "../styles/GlobalStyles";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
};

export default MyApp;
