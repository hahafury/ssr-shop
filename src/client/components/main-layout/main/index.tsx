import React from 'react';
import styles from '../../../styles/main-layout/main.module.scss';

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  );
};

export default Main;