import PageSkin from "../../components/PageSkin";

export const metadata = {
  title: "Sobre o Projeto – Vida & IA",
  description: "Origem, objetivos e propósito da pesquisa.",
};

export default function Sobre() {
  return (
    <>
      {/* aplica o fundo azul apenas nesta página */}
      <PageSkin bodyClass="page-sobre" />

      <section className="section">
        <div className="container">
          <div className="page-hero">
            <h2>Sobre o Projeto</h2>
            <p>
              Conheça a origem, os objetivos e o propósito do estudo sobre IA e
              riscos de alucinação.
            </p>
          </div>

          <div className="content-grid">
            <article className="prose">
              <h3>Como tudo começou</h3>
              <p>
                O projeto teve origem durante as aulas de Direito Penal, quando
                a turma estudava o Artigo 122 do Código Penal Brasileiro, que
                trata dos crimes de induzimento, instigação ou auxílio ao
                suicídio e à automutilação. A discussão em torno do tema
                despertou o interesse do grupo em compreender como tais condutas
                poderiam se manifestar no mundo digital, especialmente diante do
                avanço exponencial da Inteligência Artificial (IA). Durante os
                debates em sala, surgiu a inquietação: até que ponto as novas
                tecnologias — criadas para facilitar a vida humana — poderiam,
                de forma direta ou indireta, ser utilizadas como instrumentos de
                risco e até de violência psicológica? Essa reflexão marcou o
                ponto de partida do projeto.
              </p>

              <h3>Motivação e o problema identificado</h3>
              <p>
                A popularização da Inteligência Artificial trouxe inúmeros
                benefícios, mas também revelou novos desafios éticos e jurídicos.
                Entre eles, destaca-se o fenômeno das chamadas “alucinações de
                IA”, situações em que sistemas inteligentes geram informações
                falsas, distorcidas ou enganosas. Essas falhas, quando
                disseminadas em plataformas digitais, podem ter efeitos
                devastadores, sobretudo sobre crianças e adolescentes, que muitas
                vezes não possuem o senso crítico necessário para identificar
                conteúdos perigosos ou manipulativos. Diante desse cenário, o
                grupo percebeu a urgência de discutir o impacto da IA sobre o
                comportamento humano e os riscos associados à indução ou
                instigação à automutilação e ao suicídio no ambiente virtual —
                uma questão ainda pouco debatida, mas cada vez mais presente na
                sociedade contemporânea.
              </p>

              <h3>Objetivos da pesquisa</h3>
              <p>
                Com base nessa problemática, o projeto foi estruturado com o
                propósito de investigar a relação entre o uso da Inteligência
                Artificial e o crime de induzimento, instigação ou auxílio ao
                suicídio e à automutilação. Buscou-se compreender de que maneira
                ferramentas inteligentes podem influenciar comportamentos de
                risco, reproduzir discursos perigosos ou até facilitar a prática
                de crimes digitais, seja por meio de conteúdos manipulados,
                algoritmos de recomendação ou interações automáticas em redes
                sociais. Além disso, o estudo pretendeu estimular a reflexão
                crítica sobre a responsabilidade de desenvolvedores,
                legisladores e usuários diante dos potenciais danos causados por
                essas tecnologias emergentes.
              </p>

              <h3>Desenvolvimento do estudo</h3>
              <p>
                Com a orientação do professor Tarsis Barreto Oliveira, o grupo
                deu início à fase de pesquisa empírica e teórica. Foram
                realizadas pesquisas bibliográficas, análises de casos reais,
                estudos de comportamento em redes sociais e observações sobre o
                funcionamento de algoritmos e sistemas de IA. Essa etapa
                permitiu identificar exemplos concretos de como tecnologias
                inteligentes podem interferir nas interações humanas, moldando
                percepções, emoções e decisões. Também foram analisadas lacunas
                existentes na legislação penal e civil diante dessas novas formas
                de conduta. O trabalho resultou em uma reflexão profunda sobre os
                riscos éticos e sociais do uso da Inteligência Artificial,
                reforçando a importância de políticas públicas, regulação
                tecnológica e campanhas de conscientização digital.
              </p>

              <h3>Relevância do tema</h3>
              <p>
                A escolha do tema se mostrou especialmente pertinente diante do
                contexto atual, em que a Inteligência Artificial ocupa papel
                central no cotidiano, nos negócios e nas comunicações. Apesar
                disso, ainda são escassos os debates sobre os efeitos
                psicológicos e sociais que essas ferramentas podem gerar. Ao
                abordar a relação entre IA e crimes ligados à integridade mental
                e emocional, o projeto busca contribuir para a construção de uma
                cultura digital mais ética e responsável, na qual o progresso
                tecnológico esteja aliado à proteção da dignidade humana. A
                pesquisa reforça, assim, a necessidade de educação digital,
                fiscalização das plataformas e regulamentação adequada,
                garantindo que a inovação caminhe lado a lado com o respeito à
                vida e aos direitos fundamentais.
              </p>

              <h3>Resultados e reconhecimento</h3>
              <p>
                O estudo culminou na produção do resumo expandido intitulado
                “Inteligência Artificial e os Riscos de Alucinação no Crime de
                Induzimento, Instigação ou Auxílio ao Suicídio ou à
                Automutilação”, submetido ao Congresso de Direitos Humanos. Essa
                participação representou um marco para o grupo, evidenciando o
                compromisso com a pesquisa científica, a responsabilidade social
                e o debate ético sobre as novas tecnologias. O projeto reafirma o
                papel transformador do conhecimento acadêmico e seu potencial de
                gerar mudanças reais na forma como a sociedade compreende e
                utiliza a Inteligência Artificial.
              </p>
            </article>

            {/* Bloco “Objetivos” sem borda (igual você pediu) */}
            <aside className="card objetivos-card">
              <h3>Objetivos</h3>
              <ul>
                <li>Relacionar IA e Art. 122 do CP;</li>
                <li>Mapear riscos de alucinação de IA;</li>
                <li>Diretrizes éticas e jurídicas;</li>
                <li>Conscientização e prevenção.</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
