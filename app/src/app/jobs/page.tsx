import Image from 'next/image'
export default function Jobs() {
    return (
      <main>
      <div className="text-2xl font-extrabold text-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-500">
        Principais Trabalhos e Projetos
      </span>
    </div>
    <div className='grid grid-flow-col grid-rows-4 gap-4'>
      <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
 
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image src="" alt="Picture of the author" width={300} height={300}/>
                </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Sue Plantas</div>
            <a href="#" className="block mt-1 text-lg font-medium leading-tight text-black hover:underline">Aplicação mobile para uma loja de plantas</a>
            <p className="mt-2 text-slate-500">Nesse projeto eu desenvolvi todo uma aplicação mobile com uso do Flutter para uma loja de plantas onde o principal negocio era a venda de artigos de jardinagem.</p>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image src="" alt="Picture of the author" width={300} height={300}/>
                </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Startbucks UI</div>
            <a href="#" className="block mt-1 text-lg font-medium leading-tight text-black hover:underline">Aplicação web que recria a interface do Starbucks</a>
            <p className="mt-2 text-slate-500">Nesse projeto eu refiz a interface do Startbucks com HTML, CSS e Javascript puro.</p>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image src="" alt="Picture of the author" width={300} height={300}/>
                </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Todo List</div>
            <a href="#" className="block mt-1 text-lg font-medium leading-tight text-black hover:underline">Aplicação web de um Todo List</a>
            <p className="mt-2 text-slate-500">Aplicação simples de Todo List com HTML, CSS e Javascript.</p>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image src="" alt="Picture of the author" width={300} height={300}/>
                </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Pato Finanças</div>
            <a href="#" className="block mt-1 text-lg font-medium leading-tight text-black hover:underline">Aplicação mobile de finanças</a>
            <p className="mt-2 text-slate-500">Nesse projeto foi feito uma aplicação mobile com React Native que ajude o cliente a fazer as finanças pessoais.</p>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image src="" alt="Picture of the author" width={300} height={300}/>
                </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-red-500 uppercase">Landing Page Uber</div>
            <a href="#" className="block mt-1 text-lg font-medium leading-tight text-black hover:underline">Landing page para motorista de uber</a>
            <p className="mt-2 text-slate-500">Landing page feita com React Native para motorista de aplicativos.</p>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image src="" alt="Picture of the author" width={300} height={300}/>
                </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-red-500 uppercase">Tetris</div>
            <a href="#" className="block mt-1 text-lg font-medium leading-tight text-black hover:underline">Tetris em Javascript</a>
            <p className="mt-2 text-slate-500">Aplicação web feita em Javascript com o objetivo de fazer um clone do Tetris.</p>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image src="" alt="Picture of the author" width={300} height={300}/>
                </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-red-500 uppercase"> Website matematicos</div>
            <a href="#" className="block mt-1 text-lg font-medium leading-tight text-black hover:underline">Aplicação web de um site com foco em questões matematicas</a>
            <p className="mt-2 text-slate-500">Website de feito em react com sistema de comentarios e de perfil.</p>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image src="" alt="Picture of the author" width={300} height={300}/>
                </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-red-500 uppercase">Admin Dashboard</div>
            <a href="#" className="block mt-1 text-lg font-medium leading-tight text-black hover:underline">Dashboard para monitorar redes</a>
            <p className="mt-2 text-slate-500">Dashboard para monitorar redes.</p>
          </div>
        </div>
      </div>
      </div>
      </main>
    )
  }
