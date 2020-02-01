import React from "react";

import FacebookIcon from "assets/icons/facebook.svg";
import InstagramIcon from "assets/icons/instagram.svg";
import GitHubIcon from "assets/icons/github.svg";
import styles from "./Footer.module.scss";

const Footer = () => (
  <div className={styles.container}>
    <h5>
      <a href="/#">Projeto ALES</a>
    </h5>
    <div className={styles.iconContainer}>
      <a
        href="https://www.facebook.com/projetoales/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={FacebookIcon} alt="facebook icon" width="30" height="30" />
      </a>
      <a
        href="https://www.instagram.com/projetoales"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={InstagramIcon} alt="instagram icon" width="30" height="30" />
      </a>
      <a
        href="https://github.com/ProjetoALES"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GitHubIcon} alt="github icon" width="30" height="30" />
      </a>
    </div>
  </div>
);

export default Footer;
