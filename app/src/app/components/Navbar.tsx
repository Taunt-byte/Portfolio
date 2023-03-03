import React from "react"

export const Navbar: React.FC = () =>{
    return (
    <nav className="relative text-gray-900 bg-white border-b-2 border-gray-300">
    <div className="container flex justify-between mx-auto">
        <div className="relative block p-4 text-xl font-bold text-blue-600 lg:p-6"><a href="/">Lucas Neves da Silva</a></div>
        <ul className="flex">
            <li className="hover:bg-red-800 hover:text-white">
                <a href="/about" className="relative block px-2 py-6 text-sm font-bold lg:p-6 lg:text-base">Sobre</a>
            </li>
            <li className="toggle hover:bg-red-800 hover:text-white">
                <a href="/jobs" className="relative block px-2 py-6 text-sm font-bold lg:p-6 lg:text-base">Trabalhos</a>
            </li>
            <li className="toggle hover:bg-red-800 hover:text-white">
                <a href="/contact" className="relative block px-2 py-6 text-sm font-bold lg:p-6 lg:text-base">Contato</a>
            </li>   
        </ul>
        </div>
    </nav>
    )
  }
  
