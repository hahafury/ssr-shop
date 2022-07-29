import Image from 'next/image';
import styles from '../../styles/main-layout/logo/logo.module.scss';
import { LogoBlackSVG, LogoWhiteSVG } from '../../constants/svg';
import React from 'react';

enum ELogoColor {
  WHITE = 'white',
  BLACK = 'black',
}

type TLogoColor = 'white' | 'black';

interface Props {
  width?: number;
  height?: number;
  color?: TLogoColor;
}

const LogoIcon: React.FC<Props> = ({ width, height, color }): JSX.Element => {
  return (
    <div className={styles.logo}>
      <Image
        height={width}
        width={height}
        src={color === ELogoColor.WHITE ? LogoWhiteSVG : LogoBlackSVG}
        alt=""
      />
    </div>
  );
};

export default LogoIcon;
