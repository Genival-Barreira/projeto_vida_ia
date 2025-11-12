import Image from "next/image";
import PageSkin from "../../components/PageSkin"; // <-- caminho correto

export const metadata = {
  title: "Cartilha – IA e os Riscos de Alucinação",
  description: "Material educativo sobre IA e prevenção ao suicídio.",
};

export default function Cartilha() {
  return (
    <>
      {/* aplica o fundo azul só nesta página */}
      <PageSkin bodyClass="page-cartilha" />

      <section className="section">
        <div className="container">
          <div className="page-hero">
            <h2>Cartilha: IA e os Riscos de Alucinação</h2>
            <p>
              Material de conscientização sobre IA, segurança digital e
              prevenção ao suicídio/automutilação.
            </p>
          </div>

          <div className="content-grid">
            <article className="prose">
              <p>
                Produzida por acadêmicas da Unitins, a cartilha alerta para os
                riscos da <strong>alucinação de IA</strong>. O foco é informar,
                acolher e incentivar a busca por ajuda qualificada.
              </p>

              <figure className="figure">
                <Image
                  src="/capa_cartilha.png"   // Coloque esse arquivo em /public
                  alt="Capa da Cartilha"
                  width={1400}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="next-image"
                  priority
                />
              </figure>
            </article>

            {/* Bloco igual ao “Objetivos” da página Sobre (sem borda) */}
            <aside className="equipe-elaboracao-card">
              <h3>Equipe de Elaboração</h3>
              <ul>
                <li>
                  <strong>Laís Moraes Godoy</strong> — Técnica em Controle
                  Ambiental (IFTO), Graduanda em Direito (Unitins)
                </li>
                <li>
                  <strong>Rafaela Turibio das Chagas</strong> — Graduanda em
                  Direito (Unitins)
                </li>
                <li>
                  <strong>Sara Tarciso da Silva</strong> — Técnica em
                  Administração (IFTO), Graduanda em Direito (Unitins)
                </li>
              </ul>
              <p>
                <strong>Apoio:</strong> Tarsis Barreto Oliveira — Pós-Doutor em
                Ciências Criminais; Professor Adjunto da Unitins.
              </p>

              <a
                href="/pdf_cartilha.pdf"  // Coloque o PDF em /public
                className="btn btn-primary"
                download
                target="_blank"
                rel="noopener"
              >
                Baixar Cartilha (PDF)
              </a>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
