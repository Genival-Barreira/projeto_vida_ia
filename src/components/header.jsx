"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function useLock(locked){
  useEffect(()=>{
    const prev = document.body.style.overflow;
    document.body.style.overflow = locked ? "hidden" : prev || "";
    return ()=>{ document.body.style.overflow = prev || ""; };
  },[locked]);
}

export default function Header(){
  const [open,setOpen] = useState(false);
  useLock(open);

  return (
    <header className="header">
      <div className="container nav">

        {/* LOGO + NOME */}
        <Link href="/" className="brand" aria-label="Página inicial">
          <img
            src="/logo.svg"
            alt="Logo do Projeto Vida & Esperança"
            width={36}
            height={36}
          />
          <span className="brand-name">Projeto Vida &amp; IA</span>
        </Link>

        {/* LINKS DESKTOP */}
        <nav className="links" aria-label="Navegação principal">
          <Link href="/">Início</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/cartilha">Cartilha</Link>
          <Link href="/equipe">Equipe</Link>
          <Link href="/apoio" className="btn btn-primary">Apoio</Link>
        </nav>

        {/* HAMBURGUER */}
        <button
          className="burger"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={()=>setOpen(true)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* Drawer */}
      <div
        className={`drawer ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
      >
        <div className="drawer-panel">
          <nav className="drawer-nav" onClick={() => setOpen(false)}>
            <Link href="/">Início</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/cartilha">Cartilha</Link>
            <Link href="/equipe">Equipe</Link>
            <Link href="/apoio" className="btn btn-primary">Apoio</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
