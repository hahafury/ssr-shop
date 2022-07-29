import React from 'react';
import styles from '../../../../styles/main-layout/navigation/burger.module.scss';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import LogoIcon from '../../../logo';

interface Props {
  isBurgerShown: boolean;
  setIsBurgerShown: React.Dispatch<boolean>;
}

const Burger: React.FC<Props> = ({
  setIsBurgerShown,
  isBurgerShown,
}): JSX.Element => {
  const btnClassnames = [styles.button, styles.button_outlined];
  const closeBurger = () => {
    setIsBurgerShown(false);
  };
  const wrapperStyles = isBurgerShown ? { transform: 'translate(0,0)' } : {};

  return (
    <div style={wrapperStyles} className={styles.burger}>
      <div className={styles.burger__back}>
        <button className={styles.burger__backButton} onClick={closeBurger}>
          <KeyboardBackspaceIcon className={styles.burger__backIcon} />
        </button>
      </div>
      <div className={styles.burger__action}>
        <button className={btnClassnames.join(' ')}>Sign Up</button>
        <button className={styles.button}>Log In</button>
      </div>
      <ul className={styles.burger__list}>
        <li className={styles.burger__item}>Plan a Celebration</li>
        <li className={styles.burger__item}>About us</li>
        <li className={styles.burger__item}>FAQs</li>
        <li className={styles.burger__item}>Partners</li>
      </ul>
      <div className={styles.getApp}>
        <p className={styles.getApp__text}>Get the App</p>
        <div className={styles.getApp__action}>
          <div className={styles.getApp__logo}>
            <LogoIcon width={50} height={50} color={'black'} />
          </div>
          <button className={styles.getApp__button}>
            <AppleIcon className={styles.getApp__buttonImage} />
            <p className={styles.getApp__buttonText}>App store</p>
          </button>
          <button className={styles.getApp__button}>
            <AndroidIcon className={styles.getApp__buttonImage} />
            <p className={styles.getApp__buttonText}>Play Store</p>
          </button>
        </div>
      </div>

      {isBurgerShown ?
        <div className={styles.modalWrapper} onClick={closeBurger} />
        :
        <div className={styles.modalWrapperDisabled} onClick={closeBurger} />
      }
    </div>
  );
};

export default Burger;
