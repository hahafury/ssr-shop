import React from 'react';
import styles from '../../styles/banner/banner.module.scss';
import Image from 'next/image';
import { BannerIMG } from '../../constants/images';

const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <Image src={BannerIMG} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.banner__content}>
        <h1 className={styles.banner__header}>Багаття</h1>
        <p className={styles.banner__text}>Краще для вас</p>
      </div>
      <div className={styles.banner__action}>
        <button></button>
      </div>
    </>
  );
};

export default Banner;
