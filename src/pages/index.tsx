import type { NextPage } from 'next';
import MainLayout from '../client/components/main-layout';
import Banner from '../client/components/banner';

const Home: NextPage = (): JSX.Element => {
  return (
    <MainLayout>
      <Banner />
    </MainLayout>
  );
};

export default Home;
