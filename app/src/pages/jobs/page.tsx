"use client";

import Image from "next/image";
import { useState } from "react";

type Project = {
  title: string;
  category:
    | "Robótica"
    | "Cultura Maker"
    | "Desenvolvimento Web"
    | "Aplicativo"
    | "Desenvolvimento de Jogos";
  description: string;
  technologies: string[];
  status: string;
  image?: string;
  alt?: string;
  github?: string;
  imageFit?: "contain" | "cover";
};

const githubProfile = "https://github.com/Taunt-byte?tab=repositories";

const projects: Project[] = [
  {
    title: "Robô jogador de futebol",
    category: "Robótica",
    image:
      "https://github.com/Taunt-byte/UNISAL-Robo-de-futebol/raw/refs/heads/main/img/Foto2.jpeg",
    alt: "Robô desenvolvido para o projeto de futebol",
    description:
      'Projeto acadêmico desenvolvido como avaliação final da disciplina "Tópicos Especiais em Robótica", aplicando conceitos de robótica e engenharia na construção de um robô jogador de futebol.',
    technologies: ["Robótica", "Hardware", "Engenharia"],
    status: "Projeto acadêmico",
    github: "https://github.com/Taunt-byte/UNISAL-Robo-de-futebol",
    imageFit: "contain",
  },
  {
    title: "Robô de reciclagem",
    category: "Cultura Maker",
    image:
      "https://github.com/Taunt-byte/Robo-de-reciclagem/raw/refs/heads/main/img/robo3.png",
    alt: "Protótipo de robô de reciclagem",
    description:
      "Projeto acadêmico de robótica voltado à criação de um protótipo para coleta de resíduos, unindo experimentação prática, prototipagem e resolução de problemas.",
    technologies: ["Robótica", "Prototipagem", "Hardware"],
    status: "Projeto acadêmico",
    github: "https://github.com/Taunt-byte/Robo-de-reciclagem",
    imageFit: "contain",
  },
  {
    title: "Binary-to-Decimal Converter",
    category: "Desenvolvimento Web",
    image:
      "https://github.com/Taunt-byte/Bin2Dec/raw/main/Assets/converter.png",
    alt: "Interface do Binary-to-Decimal Converter",
    description:
      "Conversor para praticar a transformação de números binários em números decimais.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    status: "Projeto de estudo",
    github: "https://github.com/Taunt-byte/Bin2Dec",
  },
  {
    title: "Border Radius Previewer",
    category: "Desenvolvimento Web",
    image:
      "https://github.com/Taunt-byte/Border-Radius-Previewer/blob/main/Screenshot/previewer.png?raw=true",
    alt: "Interface do Border Radius Previewer",
    description:
      "Ferramenta visual para experimentar valores de border-radius e visualizar o resultado no elemento.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    status: "Projeto de estudo",
    github: "https://github.com/Taunt-byte/Border-Radius-Previewer",
  },
  {
    title: "Christmas Lights",
    category: "Desenvolvimento Web",
    image:
      "https://github.com/Taunt-byte/Christmas-Lights/raw/main/assets/preview.png",
    alt: "Simulação de luzes natalinas no navegador",
    description:
      "Simulação visual de uma sequência de luzes natalinas com estilização e interatividade no navegador.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    status: "Projeto de estudo",
    github: "https://github.com/Taunt-byte/Christmas-Lights",
  },
  {
    title: "Calorie Counter",
    category: "Desenvolvimento Web",
    image:
      "https://github.com/Taunt-byte/Calorie-Counter/raw/main/assets/preview.png",
    alt: "Interface do Calorie Counter",
    description:
      "Aplicação de estudo para praticar lógica de programação e manipulação de dados em uma interface web.",
    technologies: ["JavaScript"],
    status: "Projeto de estudo",
    github: "https://github.com/Taunt-byte/Calorie-Counter",
  },
  {
    title: "Currency Converter",
    category: "Desenvolvimento Web",
    image:
      "https://github.com/Taunt-byte/Exchange-rate-converter/blob/main/assets/Preview-Dark.png?raw=true",
    alt: "Interface do Currency Converter",
    description:
      "Conversor de moedas desenvolvido para explorar consumo de APIs e apresentação de cotações.",
    technologies: ["HTML5", "CSS3", "JavaScript", "API"],
    status: "Projeto de estudo",
    github: "https://github.com/Taunt-byte/Exchange-rate-converter",
  },
  {
    title: "Motoboy Landing Page",
    category: "Desenvolvimento Web",
    image:
      "https://github.com/Taunt-byte/Motoboy-Landing-Page/blob/main/assets/Preview-web.png?raw=true",
    alt: "Interface da Motoboy Landing Page",
    description:
      "Landing page responsiva para um motoboy autônomo, com identidade visual preta, amarela e branca e foco em contato por WhatsApp.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    status: "Projeto de portfólio",
    github: "https://github.com/Taunt-byte/Motoboy-Landing-Page",
  },

  {
    title: "Good Olds Consoles",
    category: "Desenvolvimento Web",
    description:
      "Marketplace de consoles e videogames retrô, com a proposta de reunir produtos clássicos de plataformas como PlayStation, Xbox e GameCube em um só lugar.",
    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    status: "Em desenvolvimento",
    github: "https://github.com/Taunt-byte/Good-Olds-Consoles",
  },

  {
    title: "Abacaxi Music",
    category: "Aplicativo",
    description:
      "Projeto de aplicativo de música inspirado em serviços de streaming, explorando biblioteca musical, playlists e reprodução de áudio local.",
    technologies: ["Flutter", "Dart"],
    status: "Em desenvolvimento",
  },
  {
    title: "STEP — Jogo Educativo",
    category: "Desenvolvimento de Jogos",
    description:
      "Projeto de jogo educativo que combina desafios de programação e lógica com mecânicas inspiradas em jogos de luta e RPG.",
    technologies: ["Next.js", "React"],
    status: "Projeto experimental",
    github: "https://github.com/Taunt-byte/STEP-2D-sete-lab",
  },
  {
    title: "Survival Horror em Godot",
    category: "Desenvolvimento de Jogos",
    description:
      "Projeto conceitual de terror e sobrevivência com atmosfera retrô, câmera sobre o ombro e narrativa original.",
    technologies: ["Godot 4", "GDScript"],
    status: "Em desenvolvimento",
  },
];

const filters = [
  "Todos",
  "Robótica",
  "Cultura Maker",
  "Desenvolvimento Web",
  "Aplicativo",
  "Desenvolvimento de Jogos",
] as const;

type Filter = (typeof filters)[number];

export default function Jobs() {
  const [activeFilter, setActiveFilter] = useState<Filter>("Todos");

  const visibleProjects = projects.filter(
    (project) => activeFilter === "Todos" || project.category === activeFilter,
  );

  return (
    <section
      id="projetos"
      className="bg-gray-950 px-6 py-20 text-white sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Meu portfólio
          </p>

          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Trabalhos e projetos
            <span className="text-cyan-400">.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            Projetos acadêmicos, aplicações web e experimentos com tecnologia e
            desenvolvimento de jogos.
          </p>
        </header>

        <div
          className="mb-10 flex flex-wrap gap-3"
          aria-label="Filtrar projetos por categoria"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeFilter === filter
                  ? "border-cyan-400 bg-cyan-400 text-gray-950"
                  : "border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-900 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
            >
              {project.image ? (
                <div className="relative flex h-56 items-center justify-center bg-gray-800 p-4">
                  <Image
                    src={project.image}
                    alt={project.alt ?? project.title}
                    width={600}
                    height={400}
                    unoptimized
                    className={`h-full w-full rounded-lg ${
                      project.imageFit === "cover"
                        ? "object-cover"
                        : "object-contain"
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <div className="flex h-36 items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                  <span className="text-4xl text-cyan-400" aria-hidden="true">
                    {project.category === "Desenvolvimento Web"
                      ? "</>"
                      : project.category === "Desenvolvimento de Jogos"
                        ? "🎮"
                        : project.category === "Aplicativo"
                          ? "♫"
                          : "⚙"}
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-cyan-400">
                    {project.category}
                  </span>

                  <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-gray-400">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold">{project.title}</h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 self-start rounded-lg bg-cyan-400 px-4 py-2.5 font-semibold text-gray-950 transition hover:bg-cyan-300"
                  >
                    Ver projeto <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <p className="mt-6 text-sm text-gray-500">
                    Projeto em desenvolvimento
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://github.com/Taunt-byte?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg border border-gray-700 px-5 py-3 font-medium text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Ver todos os repositórios →
          </a>
        </div>
      </div>
    </section>
  );
}
