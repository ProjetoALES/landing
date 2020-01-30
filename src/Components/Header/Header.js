import React from "react";

import LogoAles from "assets/images/logo-ales.svg";
import Alessauro from "assets/images/alessauro-no-background-pequeno.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <img src={LogoAles} height={40} alt="logo-ales" />
      <img src={Alessauro} height={40} alt="alessauro" />
    </div>
  );
};

export default Header;
