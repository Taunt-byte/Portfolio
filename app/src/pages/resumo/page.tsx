
import Image from "next/image";

export default function Resumo() {
  return (
    <main
      id="resumo"
      className="flex min-h-screen items-center justify-center bg-gray-950 px-6 py-20 text-white"
    >
      <section className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Apresentação */}
        <div className="text-center md:text-left">
          <p className="mb-4 font-semibold tracking-widest text-cyan-400">
            OLÁ, SEJA BEM-VINDO AO MEU PORTFÓLIO
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Lucas Neves
            <span className="block text-cyan-400">
              da Silva
            </span>
          </h1>

          <h2 className="mt-6 text-xl font-semibold text-gray-200 sm:text-2xl">
            Desenvolvedor de Software
          </h2>

          <p className="mt-5 max-w-xl leading-8 text-gray-400">
            Estudante de Engenharia da Computação, interessado em
            desenvolvimento de software, criação de jogos e tecnologia.
            Busco aprimorar minhas habilidades por meio de projetos
            práticos e soluções criativas.
          </p>

          {/* Áreas de interesse */}
          <ul className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            {[
              "Desenvolvimento Web",
              "Desenvolvimento de Jogos",
              "C++",
              "JavaScript",
            ].map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300"
              >
                {skill}
              </li>
            ))}
          </ul>

          {/* Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projetos"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-bold text-gray-950 transition hover:bg-cyan-300"
            >
              Ver projetos
            </a>

            <a
              href="https://github.com/Taunt-byte"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Meu GitHub
            </a>
          </div>
        </div>

        {/* Foto */}
        <div className="flex justify-center">
          <div className="rounded-full border-2 border-cyan-400/50 bg-gray-900 p-3 shadow-2xl shadow-cyan-400/10">
            <Image
              src="https://avatars.githubusercontent.com/u/71947586?v=4"
              alt="Foto de perfil de Lucas Neves da Silva"
              width={320}
              height={320}
              priority
              className="aspect-square rounded-full object-cover"
              sizes="(max-width: 768px) 70vw, 320px"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
