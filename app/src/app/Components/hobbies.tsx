
const hobbies = [
  {
    icon: "🎮",
    title: "Videogames e xadrez",
    description:
      "Gosto de explorar diferentes gêneros de videogames, conhecer novas histórias e observar as mecânicas, os desafios e os estilos visuais de cada jogo. Também tenho interesse em xadrez, uma atividade que envolve estratégia, raciocínio lógico, planejamento e antecipação das jogadas do adversário. Tanto nos jogos quanto no xadrez, valorizo os desafios que estimulam o pensamento e exigem a busca por soluções.",
  },
  {
    icon: "🕹️",
    title: "Desenvolvimento de jogos",
    description:
      "Tenho interesse em criar meus próprios jogos, desde a concepção das ideias até a implementação das mecânicas e dos sistemas de gameplay. Gosto de explorar ferramentas e engines de desenvolvimento, experimentar possibilidades criativas e entender como diferentes elementos se combinam para construir experiências interativas.",
  },
  {
    icon: "📚",
    title: "Leitura e escrita",
    description:
      "Gosto de ler e desenvolver ideias por meio da escrita, explorando histórias, personagens, universos fictícios e diferentes formas de narrativa. Essas atividades me permitem exercitar a criatividade, ampliar meu repertório e organizar melhor meus pensamentos. Também tenho interesse em criar minhas próprias histórias e desenvolver conceitos que possam se transformar em projetos de livros, quadrinhos ou jogos.",
  },
];


export default function Hobbies() {
  return (
    <section
      id="hobbies"
      className="bg-gray-950 px-6 py-20 text-white sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho da seção */}
        <header className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Além do código
          </p>

          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Hobbies e interesses
            <span className="text-cyan-400">.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            Meus interesses pessoais também fazem parte da minha jornada
            na tecnologia, despertando minha curiosidade e inspirando
            novas ideias para projetos.
          </p>
        </header>

        {/* Cartões de hobbies */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {hobbies.map((hobby) => (
            <article
              key={hobby.title}
              className="group rounded-2xl border border-gray-800 bg-gray-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-gray-900/80"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-3xl transition group-hover:bg-cyan-400/20">
                <span aria-hidden="true">{hobby.icon}</span>
              </div>

              <h3 className="mt-6 text-xl font-bold transition group-hover:text-cyan-300">
                {hobby.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                {hobby.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
