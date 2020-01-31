import React from "react";

import styles from "./WhatIs.module.scss";

const WhatIs = () => {
  return (
    <div className={styles.whatIsContainer}>
      <h3>O que é o ALES?</h3>
      <p>
        Acreditamos que a curiosidade e a vontade de aprender são essenciais na
        vida dos jovens, mas muitas vezes estes são suprimidos pela falta de
        acesso às informações corretas ou são desestimulados pelo sistema de
        ensino arcaico que ainda mantemos em nosso país. Reconhecemos que a
        culpa disso não é das escolas. Muitas vezes faltam, em especial nas
        públicas, as ferramentas e oportunidades para abordar temas
        extra-curriculares, por mais importantes que eles sejam. Desta percepção
        nasceu o ALES, um projeto que tem como objetivo trazer complementos
        acadêmicos e intelectuais, fora das escolas, de forma gratuita aos
        alunos da comunidade de Barão Geraldo, Campinas.
      </p>
      <p>
        Os alunos que tiverem interesse em participar do projeto terão a
        oportunidade de crescer, se conhecer e aprender através do contato com
        conteúdos que dificilmente teriam acesso apenas através da rede pública
        de ensino. Nosso projeto, portanto, não é um substituto da escola. É uma
        ferramenta para expandir horizontes e inspirar alunos a fazerem algo
        novo. É a nossa vontade de mostrar para os alunos que conhecimento é
        muito mais do que as coisas que aprendem na escola e que eles também
        podem aprender, alcançar e criar coisas que antes eles pensavam, ou eram
        ditos, serem distantes demais de sua realidade.
      </p>
      <div className={styles.line} />
    </div>
  );
};

export default WhatIs;
