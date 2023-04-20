import Image from "next/image";
export default function Resumo() {
  return (
    <main>
      <div
        id="resumo"
        className="text-2xl text-center font-extrabold h-screen flex flex-col justify-center items-center"
      >
        <h1 className="font-extrabold p-2 text-blue-900">
          Olá, sou Lucas Neves da Silva
        </h1>
        <Image
            src="https://avatars.githubusercontent.com/u/71947586?v=4"
            alt="Foto do Autor"
            width={350}
            height={350}
          />
        <p className="text-lg p-2">
          Engenheiro da computação, Desenvolvedor de software e hardware
        </p>
      </div>
    </main>
  );
}
