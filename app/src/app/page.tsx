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
              <form>
                <div className="mb-4">
                  <label className="block text-gray-200 font-bold mb-2">
                    Seu nome
                  </label>
                  <input
                    id="name"
                    type="name"
                    className="text-black"
                    placeholder="Digite seu nome"
                  ></input>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-200 font-bold mb-2">
                    Seu e-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="text-black"
                    placeholder="Digite seu email"
                  ></input>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-200 font-bold mb-2">
                    Sua mensagem
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Digite sua mensagem"
                  ></textarea>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Enviar
                </button>
              </form>
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
