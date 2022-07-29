import React from 'react';
import styles from '../../../../styles/main-layout/navigation/navigation.module.scss';
import Image from 'next/image';
import Burger from '../burger';
import { BurgerSVG } from '../../../../constants/svg';

const Navigation: React.FC = (): JSX.Element => {
  const [isBurgerShown, setIsBurgerShown] = React.useState<boolean>(false);
  const openBurger = () => {
    setIsBurgerShown(true);
  };
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        <li className={styles.navigation__item}>Celebrate</li>
        <li className={styles.navigation__item}>Sign Up</li>
        <button className={styles.button}>Log in</button>
        <button className={styles.burger} onClick={openBurger}>
          <Image
            className={styles.burger__image}
            width={50}
            height={50}
            src={BurgerSVG}
            alt=""
          />
        </button>
        <Burger
          setIsBurgerShown={setIsBurgerShown}
          isBurgerShown={isBurgerShown}
        />
      </ul>
    </nav>
  );
};

export default Navigation;