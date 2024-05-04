import React from "react";
//Import for pages
import Jobs from "@/jobs/page";
import Resumo from "@/resumo/page";
import About from "@/about/page";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Resumo></Resumo>
      <About></About>
      <Jobs></Jobs>
      <div className="bg-gray-800 text-white py-12">
        <div className="container mx-auto flex justify-between items-center">
          <div className="container mx-auto flex justify-between mt-8">
            <div className="w-1/2">
              <h2 className="font-bold text-lg mb-4">Entre em contato</h2>
            </div>
            <div className="w-1/2">
              <h2 className="font-bold text-lg mb-4">Informações de contato</h2>
              <p className="mb-2">Telefone: (12) 99150-3741</p>
              <p className="mb-2">E-mail: lucasluan94@hotmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-white">
        <div className="container p-1 flex items-center justify-center">
          <p className="text-sm">
            Lucas Neves da Silva 2023 &copy; Desenvolvido com 
            <i className="text-blue-500">React JS</i>
            <i className="text-blue-500">Next JS</i> e
            <i className="text-blue-500"> Tailwind CSS</i>
          </p>
        </div>
      </footer>
    </div>
  );
}
