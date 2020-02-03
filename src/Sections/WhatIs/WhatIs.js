import React from "react";

import styles from "./WhatIs.module.scss";

const WhatIs = () => {
  return (
    <div className={styles.whatIsContainer}>
      <h3>O que é o ALES?</h3>
      <p>
        O ALES (Além da Escola) nasceu da perspectiva de que as escolas do
        Brasil, no geral, não passam a motivação e interesse necessários para o
        aprendizado e acesso ao conhecimento. Reconhecemos que a culpa disso não
        é das escolas. Muitas vezes faltam, em especial nas públicas, as
        ferramentas e oportunidades para abordar temas extra-curriculares, por
        mais importantes que eles sejam.
      </p>
      <p>
        Tentamos resolver esse problema oferecendo atividades extracurriculares
        pra alunos de escolas públicas da região de Campinas aos finais de
        semana. Temos diversas matérias acontecendo aos sábados e domingos na EE
        Barão Geraldo de Rezende e no Instituto de Computação da Unicamp. Também
        organizamos visitas aos institutos da Unicamp e eventos interativos,
        como hackathons e workshops sobre carreiras e o mundo científico.
      </p>
      <div className={styles.line} />
    </div>
  );
};

export default WhatIs;
