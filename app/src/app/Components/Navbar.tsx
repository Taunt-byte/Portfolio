import React from "react";

export default function Navbar() {
  return (
    <div className="bg-gray-900 text-white sticky top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <a href="#resumo" className="text-xl font-bold">
          Lucas Neves da Silva
        </a>
        <ul className="flex items-center">
          <li>
            <a href="#resumo" className="px-4 hover:text-gray-300">
              Início
            </a>
          </li>
          <li>
            <a href="#sobre" className="px-4 hover:text-gray-300">
              Sobre
            </a>
          </li>
          <li>
            <a href="#Projetos" className="px-4 hover:text-gray-300">
              Projetos
            </a>
          </li>
          <li>
            <a href="#" className="px-4 hover:text-gray-300">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
