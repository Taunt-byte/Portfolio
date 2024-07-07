import Image from "next/image";

export default function Jobs() {
  return (
    <main>
      <div className="p-4" id="Projetos">
        <h1 className="text-black p-10 text-2xl font-extrabold text-center">
          Principais Trabalhos e Projetos
        </h1>
        <div className="bg-gray-800 text-white rounded-lg flex flex-col items-center">
          <h1 className="font-extrabold text-2xl p-3">
            Robô jogador de futebol
          </h1>
          <div className="p-2">
            <Image
              src="https://github.com/Taunt-byte/UNISAL-Robo-de-futebol/blob/main/img/Foto2.jpeg?raw=true"
              alt="Foto do robo"
              width={300}
              height={300}
              className="rounded"
            />
          </div>
          <div className="text-justify leading-relaxed px-20 text-center p-5">
            <p>
              Projeto feito como prova final da disciplina "Tópicos Especiais em
              Robótica", desenvolvemos um impressionante robô jogador de
              futebol, integrando conhecimentos teóricos com aplicação prática.
            </p>
          </div>
          <div className="text-justify leading-relaxed text-center p-5">
          <a href="https://github.com/Taunt-byte/UNISAL-Robo-de-futebol">Github</a>
          </div>
        </div>
      </div>
    </main>
  );
}
