import React from "react";
import styles from "./Puccamp.module.css";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import uspImg from "../../../assets/puc.png";
import pucImg from "../../../assets/puc.png";



function Puccamp() {
  return (
    <div className={styles.container}>
      <Header />
<Menu />

      <main>
        <div className={styles.escolasUniversitarias}>
          <h2>Escolas universitárias</h2>
        </div>
        <img className={styles.pucImg} src={pucImg} alt="imgUp" />

        <section className={styles.sectionText}>
          <p>
A Pontifícia Universidade Católica de Campinas, conhecida como PUC-CAMP, é uma das instituições privadas de   <br></br>
ensino superior mais tradicionais e reconhecidas do Brasil. Fundada em 1946, a universidade possui grande desta- <br></br>
que nas áreas de Ciências Humanas, Direito, Comunicação, Psicologia, Administração e Tecnologia, sendo referência <br></br>
pela qualidade de ensino e pela formação crítica e humanizada de seus estudantes.<br></br>
<br></br>

Ao longo de sua história, a PUC-CAMP consolidou-se como uma universidade de grande importância acadêmica, cultural <br></br>
e social, contribuindo para a formação de profissionais altamente qualificados e para o desenvolvimento do pensamento<br></br>
crítico e científico no país. A instituição também é conhecida por incentivar debates, pesquisas e projetos voltados às<br></br>
questões sociais, culturais e econômicas da sociedade brasileira.<br></br>
<br></br>

Ingressar na PUC-CAMP é o objetivo de muitos estudantes que buscam uma formação de excelência em uma universidade <br></br>
reconhecida nacionalmente. Apesar de ser uma instituição privada, diversos cursos apresentam alta concorrência, princi- <br></br>
palmente Direito, Relações Internacionais, Psicologia e Comunicação Social. Dessa forma, os candidatos precisam <br></br>
demonstrar bom desempenho acadêmico e preparação adequada para enfrentar os processos seletivos.<br></br>
<br></br>

O ingresso na universidade ocorre principalmente por meio do vestibular próprio, além da utilização da nota do ENEM  <br></br>
em determinados cursos e programas de bolsas. A PUC-CAMP também oferece oportunidades de financiamento<br></br>
estudantil e bolsas de estudo, permitindo que mais estudantes tenham acesso ao ensino superior de qualidade.<br></br>
Ainda assim, a exigência acadêmica permanece elevada, refletindo o compromisso da instituição com a<br></br>
 excelência educacional.<br></br>
<br></br>


Nesse contexto, conquistar uma vaga na PUC-CAMP representa uma importante realização acadêmica e pessoal. Para <br></br>
muitos estudantes, estudar na universidade significa fazer parte de uma instituição tradicional, reconhecida pelo ambiente<br></br>
intelectual e pela formação diferenciada oferecida aos seus alunos. Além disso, a universidade proporciona  diversas <br></br>
oportunidades de desenvolvimento profissional, científico e cultural.<br></br>
<br></br>

Assim, o ingresso na PUC-CAMP representa não apenas o acesso ao ensino superior, mastambém a oportunidade de construir <br></br>
uma trajetória acadêmica sólida em uma das universidades privadas mais respeitadas do Brasil. A dedicação necessária para<br></br>
alcançar esse objetivo torna a conquista ainda mais significativa para os estudantes aprovados.<br></br>

            <br></br> 
          </p>
        </section>
      </main>

      <footer>
        <p>.</p>
      </footer>
    </div>

  );
}

export default Puccamp;