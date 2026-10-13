
"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Início", href: "#resumo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/95 text-white backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#resumo"
          className="text-xl font-bold hover:text-cyan-400"
          onClick={() => setMenuOpen(false)}
        >
          Lucas Neves<span className="text-cyan-400">.</span>
        </Link>

        <button
          type="button"
          className="rounded-md border border-white/10 px-3 py-2 hover:bg-gray-800 md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 top-full w-full flex-col gap-2 border-b border-white/10 bg-gray-950 p-6 md:static md:flex md:w-auto md:flex-row md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-4 py-2 text-gray-300 transition hover:bg-gray-800 hover:text-cyan-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
