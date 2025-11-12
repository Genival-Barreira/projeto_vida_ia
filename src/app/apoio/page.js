export const metadata = {
  title: "Apoio e Redes — Projeto Vida & Esperança",
  description:
    "Canais oficiais de ajuda: CVV 188, CAPS e hospitais de referência.",
};

export default function Apoio() {
  return (
    <section className="section section-medium">
      <div className="container">
        <div className="page-hero">
          <h2>Apoio e Redes</h2>
          <p>Use os canais abaixo para ajuda qualificada.</p>
        </div>

        {/* mesmos cards da Home */}
        <div className="grid grid-3 mt-2">
          {/* CVV */}
          <article className="card">
            <h3>CVV — 188</h3>
            <p>
              Centro de Valorização da Vida. Atendimento 24h por telefone,
              chat e e-mail.
            </p>
            <a
              className="btn btn-outline mt-1"
              href="https://cvv.org.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Site do CVV
            </a>
          </article>

          {/* CAPS */}
          <article className="card">
            <h3>CAPS</h3>
            <p>
              Centros de Atenção Psicossocial. Procure a unidade mais próxima.
            </p>
            <a
              className="btn btn-outline mt-1"
              href="https://www.gov.br/saude/pt-br/assuntos/saude-mental/caps"
              target="_blank"
              rel="noopener noreferrer"
            >
              Informações sobre CAPS
            </a>
          </article>

          {/* Hospitais / MS */}
          <article className="card">
            <h3>Hospitais de referência</h3>
            <p>Busque o serviço de saúde mais próximo em caso de emergência.</p>
            <a
              className="btn btn-outline mt-1"
              href="https://www.gov.br/saude"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ministério da Saúde
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
