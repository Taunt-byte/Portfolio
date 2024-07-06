import Image from "next/image";
export default function Resumo() {
  return (
    <main>
      <div
        id="resumo"
        className=" text-center h-screen flex flex-col justify-center items-center"
      >
        <h1 className="font-extrabold p-2 text-slate-900 text-2xl">
          Olá, sou Lucas Neves da Silva
        </h1>
        <div className="bg-slate-900 rounded-lg flex p-2">
          <Image
            className="rounded-lg"
            src="https://avatars.githubusercontent.com/u/71947586?v=4"
            alt="Foto do Autor"
            width={250}
            height={250}
          />
          <p className="text-slate-100 p-4">
            Engenheiro da computação, Desenvolvedor de software, Desenvolvedor
            de hardware e Criador de conteudo.
          </p>
        </div>
      </div>
    </main>
  );
}
