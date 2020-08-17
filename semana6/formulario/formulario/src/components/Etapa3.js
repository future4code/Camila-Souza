import React from 'react';
import Question from './Question';
import DropDown from './DropDown';

function Etapa3() {
  return (
    <div>
        <h1>ETAPA 3 - Informações gerais de ensino</h1>
        <Question question={"5. Por que você não terminou um curso de graduação?"} />
        <DropDown question={"6. Você fez algum curso complementar?"}
            options={[
                "Nenhum",
                "Curso técnico",
                "Curso de língua estrangeira",
            ]} />
    </div>
  );
}

export default Etapa3;