export default function Contato(){
  return (
    <section className="section">
      <div className="container">
        <h2>Contato</h2>
        <p className="lead">
          Fale com a equipe do projeto. Para emergências, ligue 188 (CVV) ou procure o serviço de saúde.
        </p>

        <div className="grid grid-2" style={{marginTop:"1rem"}}>
          <form className="card" onSubmit={(e)=>e.preventDefault()}>
            <h3>Envie uma mensagem</h3>
            <label>Nome<br/><input className="input"/></label><br/><br/>
            <label>E-mail<br/><input type="email" className="input"/></label><br/><br/>
            <label>Mensagem<br/><textarea rows="5" className="input"></textarea></label><br/><br/>
            <button className="btn btn-primary">Enviar</button>
          </form>

          <div className="card">
            <h3>Informações</h3>
            <p><strong>E-mail:</strong> projeto@exemplo.ifto.edu.br</p>
            <p><strong>Instituição:</strong> Instituto Federal do Tocantins (IFTO)</p>
            <p><span className="badge">Ajuda Imediata</span> Ligue 188 (CVV)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
