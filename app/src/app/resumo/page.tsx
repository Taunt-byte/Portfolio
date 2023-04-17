import Image from 'next/image'
export default function Resumo(){
    return(
        <main>
            <div className="text-2xl pt-3 pb-3 text-center font-extrabold ...">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-500">
      Visão geral
    </span>
  </div>
  <div className="grid grid-cols-2 gap-4 text-center">
    <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <Image src="https://avatars.githubusercontent.com/u/71947586?v=4" alt="Foto do Autor" width={300} height={300}/>
    </div>
    <div className="p-8">
      <div className="text-sm font-bold tracking-wide text-blue-600 uppercase">Lucas Neves da Silva</div>
      <a href="/about" className="block mt-1 text-lg font-medium leading-tight text-black hover:underline">Engenheiro da computação</a>
      <p className="mt-2 text-slate-500">Sou engenheiro da computação formado pelo Centro Salesiano de São Paulo (UNISAL) na cidade de Lorena.</p>
    </div>
  </div>
  </div>
  <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
    <iframe className="h-80 w-80 aspect-video" src="https://www.youtube.com/embed/AXjlCA3nseY"></iframe>
    </div>
    <div className="p-8">
      <div className="text-sm font-bold tracking-wide text-red-600 uppercase">Competições</div>
      <a href="/about" className="block mt-1 text-lg font-medium leading-tight text-black hover:underline">Campeonato de robotica</a>
      <p className="mt-2 text-slate-500">Durante a graduação em engenharia da computação eu participei de diversas atividades como o campeonato de robotica onde o objetivo era criar um robo para se jogar futebol.</p>
    </div>
  </div>
  </div>
  <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <Image  src="https://media.licdn.com/dms/image/C4D0BAQGNNDBKnRWUHA/company-logo_200_200/0/1645313067801?e=1685577600&v=beta&t=GrDX18_Bc6d9WQcColfnL6Ug2KnQhKe7RYPQDIB-0xo" alt="Picture of the author" width={200} height={200}/>
    </div>
    <div className="p-8">
      <div className="text-sm font-bold tracking-wide text-blue-600 uppercase">Desenvolvedor de software Voluntario</div>
      <a href="/about" className="block mt-1 text-lg font-medium leading-tight text-black hover:underline">Se joga</a>
      <p className="mt-2 text-slate-500">A Se Joga! é uma plataforma que busca inserir mais as mulheres no mercado e no ambiente de jogos digitais com segurança, diversão e inclusão.</p>
    </div>
  </div>
  </div>
  <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
    <Image src="https://github.com/Taunt-byte/Robo-de-reciclagem/blob/main/img/robo3.png?raw=true" alt="Picture of the author" width={300} height={300}/>
       </div>
    <div className="p-8">
      <div className="text-sm font-bold tracking-wide text-red-600 uppercase">Principal Projeto</div>
      <a href="/jobs" className="block mt-1 text-lg font-medium leading-tight text-black hover:underline">Robô automatizado para coleta de lixo</a>
      <p className="mt-2 text-slate-500">O objetivo desse projeto é de desenvolver um robô capaz de seguir um trajeto previamente determinado e realizar a coleta automatizada de lixo ao longo de todo o percurso.</p>
    </div>
  </div>
  </div>
  </div>
        </main>
    )
}