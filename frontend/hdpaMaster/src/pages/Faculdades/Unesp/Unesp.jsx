import React from "react";
import styles from "./Unesp.module.css";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import unespImg from "../../../assets/Logo_Unesp.svg";

function Unesp() {
  return (
    <div className={styles.container}>
      <Header />
<Menu />

      <main>
        <div className={styles.escolasUniversitarias}>
          <h2>Escolas universitárias</h2>
        </div>
        <img className={styles.unespImg} src={unespImg} alt="imgUp" />

        <section className={styles.sectionText}>
          <p>
A Universidade Estadual Paulista, conhecida como Unesp, é uma das maiores e mais importantes universidades <br></br> 
públicas do Brasil. Criada em 1976, a instituição possui diversos campos distribuídos pelo estado de São Paulo<br></br> 
oferecendo cursos de graduação e pós-graduação em diferentes áreas do conhecimento, como Ciências Bio- <br></br> 
lógicas, Engenharia, Medicina, Ciências Humanas, Tecnologia e Artes. <br></br> 
<br></br> 

A Unesp destaca-se pela qualidade acadêmica, pela forte atuação em pesquisas científicas e pelo compromisso<br></br> 
com o desenvolvimento social e educacional. Ao longo dos anos, a universidade consolidou-se como referência  <br></br> 
nacional em ensino, pesquisa e extensão universitária, formando profissionais qualificados e contribuindo  <br></br> 
significativamente para a produção de conhecimento científico no país.<br></br> 
<br></br> 


Ingressar na Unesp é um objetivo bastante desejado por estudantes de todo o Brasil, principalmente devido ao <br></br> 
prestígio e à qualidade reconhecida da instituição. A concorrência em diversos cursos é elevada, especialmente<br></br> 
em Medicina, Direito,Engenharia e áreas da saúde, exigindo dos candidatos grande preparação acadêmica e dedi-<br></br> 
cação aos estudos. <br></br> 
<br></br> 

O principal processo seletivo da universidade é realizado pela Fundação para o Vestibular da Unesp, responsável <br></br> 
pela aplicação de provas conhecidas pelo alto nível de exigência e pela abordagem interdisciplinardos conteúdos.<br></br> 
Além do vestibular tradicional, a universidade também utiliza o ENEM como forma complementar de ingresso, ampliando<br></br> 
as oportunidades para os candidatos sem reduzir a qualidade do processo seletivo.<br></br> 
<br></br> 


Nesse cenário, conquistar uma vaga na Unesp representa uma grande conquista pessoal  e acadêmica. Muitos estu-<br></br> 
dantes dedicam anos de preparação para alcançar a aprovação, enfrentando uma rotina intensa de estudos e desafios.<br></br> 
Ser aprovado significa ingressar em uma universidade pública de excelência, reconhecida pela formação<br></br> 
acadêmica de alto nível e pelas oportunidades de crescimento profissional e científico.<br></br> 
<br></br> 

Assim, a dificuldade para ingressar na Unesp valoriza ainda mais a conquista dos estudantes aprovados. Fazer parte da<br></br> 
universidade significa integrar uma instituição comprometida com a produção de conhecimento, a inovação e a formação <br></br> 
de profissionais preparados para contribuir com a sociedade. <br></br> 
 <br></br> 

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

export default Unesp;