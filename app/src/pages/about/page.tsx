
import Image from "next/image";

const experiences = [
  {
    title: "Engenharia da Computação",
    subtitle: "UNISAL — Centro Universitário Salesiano de São Paulo",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*36bIjmFoSXV2Q6U_tJRmSw.jpeg",
    alt: "Logo do UNISAL",
    description:
      "Durante minha trajetória acadêmica, tive contato com diferentes linguagens e tecnologias, incluindo C, C++, C#, Java e Dart, além de ferramentas e frameworks como React, Flutter e Django. Também participei de atividades extracurriculares que ampliaram meu contato com programação e desenvolvimento de projetos.",
    tags: ["C", "C++", "C#", "Java", "Dart", "React", "Flutter", "Django"],
  },
  {
    title: "AeroUnisal",
    subtitle: "Aeromodelismo e trabalho em equipe",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*RIytHKzAkVlp94z5v7-sNg.jpeg",
    alt: "Registro da participação no grupo de aeromodelismo",
    description:
      "Em 2019, durante meu primeiro ano de faculdade, participei do grupo de aeromodelismo da UNISAL. A experiência me permitiu colaborar em diferentes etapas dos projetos, trocar conhecimentos com outros estudantes e conhecer aplicações práticas de áreas distintas da engenharia.",
    tags: ["Aeromodelismo", "Colaboração", "Prototipagem"],
  },
  {
    title: "Cultura Maker",
    subtitle: "Robótica e desenvolvimento de projetos",
    image:
      "https://github.com/Taunt-byte/Robo-de-reciclagem/blob/main/img/robo3.png?raw=true",
    alt: "Robô coletor de lixo desenvolvido durante a graduação",
    description:
      "Durante a graduação, tive contato com a Cultura Maker por meio de projetos práticos que envolviam criação, experimentação e resolução de problemas. Um dos exemplos foi o desenvolvimento de um robô coletor de lixo, que representou uma oportunidade de aplicar conhecimentos técnicos na construção de uma solução concreta.",
    tags: ["Robótica", "Prototipagem", "Resolução de problemas"],
  },
];

export default function About() {
  return (
    <main
      id="sobre"
      className="bg-gray-950 px-6 py-20 text-white sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho */}
        <header className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Minha trajetória
          </p>

          <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Sobre mim
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-400">
            Conheça minha formação, experiências acadêmicas e projetos
            que contribuíram para minha evolução na área de tecnologia.
          </p>
        </header>

        {/* Experiências */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <article
              key={experience.title}
              className="grid overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-lg transition duration-300 hover:border-cyan-400/40 md:grid-cols-5"
            >
              {/* Imagem */}
              <div className="relative flex min-h-56 items-center justify-center bg-gray-800 p-6 md:col-span-2 md:min-h-full">
                <Image
                  src={experience.image}
                  alt={experience.alt}
                  width={600}
                  height={400}
                  className="max-h-80 w-full rounded-lg object-contain"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6 sm:p-8 md:col-span-3 md:p-10">
                <span className="text-sm font-semibold text-cyan-400">
                  EXPERIÊNCIA 0{index + 1}
                </span>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  {experience.title}
                </h2>

                <p className="mt-2 text-sm font-medium text-gray-400">
                  {experience.subtitle}
                </p>

                <p className="mt-6 leading-7 text-gray-300">
                  {experience.description}
                </p>

                {/* Tecnologias e competências */}
                <ul className="mt-6 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-sm text-cyan-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
