import '../client/styles/globals.scss';
import type { AppProps } from 'next/app';
import { wrapper } from '../client/store/store';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
