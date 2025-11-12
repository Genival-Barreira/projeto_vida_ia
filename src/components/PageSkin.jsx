"use client";
import { useEffect } from "react";

/**
 * Aplica uma classe no <body> quando a página está montada
 * e remove quando sai da página.
 * Ex.: <PageSkin bodyClass="page-sobre" />
 */
export default function PageSkin({ bodyClass }) {
  useEffect(() => {
    if (!bodyClass) return;
    const cls = bodyClass.trim();

    document.body.classList.add(cls);
    return () => {
      document.body.classList.remove(cls);
    };
  }, [bodyClass]);

  return null; // não renderiza nada
}
