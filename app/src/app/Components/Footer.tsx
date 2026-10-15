
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="border-t border-white/10 bg-gray-950 text-gray-300"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-white">
            Vamos conversar?
          </h2>

          <p className="mb-6 max-w-md leading-7 text-gray-400">
            Estou aberto a oportunidades, colaborações e projetos
            relacionados a software e tecnologia.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/5512991503741?text=${encodeURIComponent(
                "Olá, Lucas! Vi seu portfólio e gostaria de conversar."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-500 px-5 py-3 font-semibold text-gray-950 transition hover:bg-green-400"
            >
              WhatsApp
            </a>

            <a
              href="https://www.linkedin.com/in/lucas-neves-da-silva-4058211a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-cyan-400 px-5 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-gray-950"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-bold text-white">
            Outros contatos
          </h2>

          <p className="mb-3">
            <a
              href="mailto:lucasluan94@hotmail.com"
              className="break-all transition hover:text-cyan-400"
            >
              lucasluan94@hotmail.com
            </a>
          </p>

          <a
            href="https://github.com/Taunt-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-400"
          >
            GitHub — Taunt-byte
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-gray-500">
        © {currentYear} Lucas Neves da Silva. Desenvolvido com{" "}
        <span className="text-cyan-400">Next.js</span> e{" "}
        <span className="text-cyan-400">Tailwind CSS</span>.
      </div>
    </footer>
  );
}
