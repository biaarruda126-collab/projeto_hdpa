import React from "react";
import styles from "./Enem.module.css";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import enemImg from "../../../assets/enem.png";

function Enem() {
  return (
    <div className={styles.container}>
      <Header />
<Menu />

      <main>
        <div className={styles.escolasUniversitarias}>
          <h2>Escolas universitárias</h2>
        </div>
        <img className={styles.enemImg} src={enemImg} alt="imgUp" />

        <section className={styles.sectionText}>
          <p>
O Exame Nacional do Ensino Médio, conhecido como ENEM, é uma das principais formas de acesso ao <br></br>
 ensino superior no Brasil. Criado em 1998, o exame foi inicialmente desenvolvido para avaliar o desempenho <br></br>  
dos estudantes ao final da educação básica, mas ao longo dos anos passou a desempenhar um papel fundamental <br></br> 
no ingresso em universidades públicas e privadas de todo o país. <br></br> 
            <br></br> 

Atualmente, o ENEM é utilizado como critério de seleção em programas educacionais como o Sistema de Seleção <br></br> 
Unificada (SISU), o Programa Universidade para Todos (PROUNI) e o Fundo de Financiamento Estudantil (FIES), além <br></br> 
de servir como forma de ingresso em diversas instituições de ensino superior. Dessa forma, o exame tornou-se uma  <br></br> 
oportunidade importante para milhões de estudantes que desejam ingressar na faculdade. <br></br> 
 <br></br> 



A prova é composta por questões de Linguagens, Ciências Humanas, Ciências da Natureza, Matemática e uma redação, <br></br> 
exigindo dos candidatos não apenas conhecimento dos conteúdos escolares, mas também interpretação, raciocínio <br></br> 
lógico e capacidade crítica. Por isso, muitos estudantes dedicam meses ou até anos de preparação para  alcançar <br></br> 
uma boa pontuação, principalmente aqueles que desejam concorrer a cursos altamente disputados, como Medicina, <br></br> 
Direito e Engenharia.<br></br> 
<br></br> 


Além da ampla concorrência, o ENEM também se destaca pelo nível de exigência da redação, que avalia competências <br></br> 
relacionadas à argumentação, organização das ideias e domínio da norma padrão da língua portuguesa. A nota obtida no <br></br> 
exame pode definir o acesso dos estudantes às principais universidades do país, tornando o desempenho na prova extremamente <br></br> 
importante para o futuro acadêmico e profissional dos candidatos. Nesse contexto, alcançar uma boa nota no ENEM representa <br></br> 
muito mais do que um simples resultado em uma prova. <br></br> 
 <br></br> 

Para muitos estudantes, significa a oportunidade de transformar a própria realidade por meio da educação, conquistando <br></br> 
acesso ao ensino superior e ampliando as possibilidades profissionais. O exame também simboliza dedicação, persistência<br></br> 
e preparação diante de um processo altamente competitivo. <br></br>
<br></br>

Assim, o ENEM tornou-se um dos principais caminhos para o ingresso no ensino superior brasileiro, sendo reconhecido não<br></br> 
apenas pela sua importância acadêmica, mas também pelo impacto social que proporciona ao ampliar o acesso à educação em <br></br> 
todo o país. <br></br> 

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

export default Enem;