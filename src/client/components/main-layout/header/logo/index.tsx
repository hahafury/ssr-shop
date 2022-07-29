import React from 'react';
import styles from '../../../../styles/main-layout/logo/logo.module.scss';
import LogoIcon from '../../../logo';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <LogoIcon height={100} width={100} />
    </div>
  );
};

export default Logo;
