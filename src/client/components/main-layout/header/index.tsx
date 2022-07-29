import React from 'react';
import styles from '../../../styles/main-layout/header/header.module.scss';
import Navigation from './navigation';
import Logo from './logo';

const Header: React.FC = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <div className={styles.header__main}>
        <Logo />
        <Navigation />
      </div>
    </div>
  );
};

export default Header;