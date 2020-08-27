import React from 'react';
import Question from './Question';
import DropDown from './DropDown';

class Etapa1 extends React.Component{
    render() {
        return (
            <div>
               <h1>ETAPA 1 - DADOS GERAIS</h1>
               <Question question={"1. Qual o seu nome?"} />
               <Question question={"2. Qual a sua idade?"} />
               <Question question={"3. Qual o seu e-mail"} />
               <DropDown question={"4. Qual a sua escolaridade?"} 
                    options={[
                        "Ensino fundamental incompleto",
                        "Ensino fundamental completo",
                        "Ensino médio incompleto",
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino superior completo",
                        "Pós-graduação incompleta",
                        "Pós-graduação completa",
                    ]}
                />
                <br></br>
            </div>
        );
}}

export default Etapa1;