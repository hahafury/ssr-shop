import React from 'react';
import styles from '../../styles/main-layout/main-layout.module.scss';
import Header from './header';
import Footer from './footer';
import Main from './main';
import Container from '../container';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className={styles.main_layout}>
      <Container>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer>

        </Footer>
      </Container>
    </div>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      a: 1,
    },
  };
};

export default MainLayout;