import Link from "next/link";

export default function Home(){
  return (
    <>
      <section className="section hero section-strong">
        <div className="container hero-grid">
          <div>
            <h1>Falar é o primeiro passo para o cuidado.</h1>
            <p>
              Nosso projeto busca compreender, acolher e dar visibilidade à saúde mental e à prevenção
              do suicídio por meio de pesquisa, empatia e informação.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/sobre">Saiba mais sobre o projeto</Link>
              <Link className="btn btn-outline" href="/cartilha">Cartilha</Link>
            </div>
          </div>

          <div className="card help-card" style={{background:"#0F1A3A", color:"#fff"}}>
            <p><strong>Se você ou alguém precisa de ajuda agora:</strong></p>
            <p className="mt-1">Ligue <strong>188 (CVV)</strong> — atendimento 24h.</p>
          </div>
        </div>
      </section>

      <section className="section section-medium">
        <div className="container">
          <h2>Organizações e serviços</h2>
          <div className="grid grid-3 mt-2">
            <div className="card">
              <h3>CVV — 188</h3>
              <p>Centro de Valorização da Vida. Atendimento 24h por telefone, chat e e-mail.</p>
              <a className="btn btn-outline mt-1" href="https://cvv.org.br" target="_blank" rel="noopener">Site do CVV</a>
            </div>
            <div className="card">
              <h3>CAPS</h3>
              <p>Centros de Atenção Psicossocial. Procure a unidade mais próxima.</p>
              <a className="btn btn-outline mt-1" href="https://www.gov.br/saude/pt-br/assuntos/saude-mental/caps" target="_blank" rel="noopener">Saiba mais</a>
            </div>
            <div className="card">
              <h3>Hospitais de referência</h3>
              <p>Busque o serviço de saúde mais próximo em caso de emergência.</p>
              <a className="btn btn-outline mt-1" href="https://www.gov.br/saude" target="_blank" rel="noopener">Site do MS</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
