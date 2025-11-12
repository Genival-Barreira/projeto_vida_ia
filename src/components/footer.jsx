export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <strong>Projeto Vida &amp; AI</strong>
          <p className="mt-1">Pesquisa, conscientização e prevenção ao suicídio e automutilação.</p>
        </div>
        <div>
          <strong>Links</strong>
          <ul>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/cartilha">Cartilha</a></li>
            <li><a href="/apoio">Apoio</a></li>
          </ul>
        </div>
        <div>
          <strong>Ajuda imediata</strong>
          <ul>
            <li><a href="https://cvv.org.br" target="_blank" rel="noopener">CVV — 188</a></li>
            <li>UPA 24h / SAMU 192</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} Projeto Vida &amp; AI.
      </div>
    </footer>
  );
}
