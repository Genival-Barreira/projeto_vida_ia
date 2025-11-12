import Image from "next/image";

export const metadata = {
  title: "Equipe do Projeto – Vida & AI",
  description: "Integrantes do projeto de pesquisa e suas funções.",
};

export default function Equipe() {
  return (
    <section className="section section-medium">
      <div className="container">
        <div className="page-hero">
          <h2>Equipe do Projeto</h2>
          <p>
            Estudantes e docentes da universidade estadual do tocantins comprometidos com a pesquisa, a ética e
            o impacto social.
          </p>
        </div>

        <div className="grid grid-3 mt-2">
          {/* === CARD 1 === */}
          <article className="card equipe-card">
            <div className="equipe-img">
              <Image
                src="/lais.jpeg"
                alt="Integrante 1"
                width={300}
                height={300}
                className="next-image"
              />
            </div>
            <h3>Laís Moraes Godoy</h3>
            <p className="cargo">Análise jurídica e aplicação do Código Penal</p>
            <p className="formacao">
              Encarregada da análise jurídica, Laís Moraes Godoy examinou o crime de induzimento, 
              instigação ou auxílio ao suicídio ou à automutilação, previsto no Artigo 122 do Código 
              Penal Brasileiro. Sua pesquisa destacou as alterações introduzidas pela Lei nº 13.968/2019, 
              que ampliou o alcance da norma para incluir a automutilação, demonstrando a necessidade de o 
              ordenamento jurídico acompanhar os avanços tecnológicos. Sua contribuição evidenciou como os 
              meios digitais e a Inteligência Artificial podem ser empregados como instrumentos de crime, 
              reforçando a importância da atuação legislativa e da conscientização social.
            </p>
          </article>

          {/* === CARD 2 === */}
          <article className="card equipe-card">
            <div className="equipe-img">
              <Image
                src="/rafa.jpeg"
                alt="Integrante 2"
                width={300}
                height={300}
                className="next-image"
              />
            </div>
            <h3>Rafaela Turibio das Chagas</h3>
            <p className="cargo">Resultados e discussão dos impactos</p>
            <p className="formacao">
              Responsável pela etapa de resultados e discussão, Rafaela Turibio analisou os impactos da 
              Inteligência Artificial sobre a dignidade e os direitos humanos, com ênfase em grupos vulneráveis, 
              como crianças e adolescentes. A partir dos dados coletados, identificou falhas nas plataformas 
              digitais e a carência de mecanismos de proteção adequados. Sua contribuição ressaltou a 
              importância de políticas públicas, da fiscalização e de ações educativas voltadas à prevenção 
              dos riscos associados ao uso indevido dessas tecnologias.
            </p>
          </article>

          {/* === CARD 3 === */}
          <article className="card equipe-card">
            <div className="equipe-img">
              <Image
                src="/sara.jpeg"
                alt="Integrante 3"
                width={300}
                height={300}
                className="next-image"
              />
            </div>
            <h3>Sara Tarciso da Silva</h3>
            <p className="cargo">Pesquisa e levantamento de casos</p>
            <p className="formacao">
             Responsável pela etapa de pesquisa e levantamento de casos, Sara Tarciso realizou a identificação e 
             análise de situações reais relacionadas ao tema do projeto. Sua atuação concentrou-se em investigar 
             o uso da Inteligência Artificial em contextos de risco, especialmente em casos de indução e 
             instigação à automutilação e ao suicídio. Essa contribuição foi fundamental para compreender de 
             que forma essas tecnologias podem ser utilizadas de maneira perigosa e quais impactos produzem 
             na sociedade contemporânea.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}
