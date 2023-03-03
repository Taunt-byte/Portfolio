import Image from 'next/image'

export default function About() {
    return (
      <main>
      <div className="text-2xl text-center font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-500">
          Sobre mim
        </span>
      </div>
      <div className='p-10'
      style={{
          display: "flex",
          justifyContent: "center",
        }}>
        <Image src="https://avatars.githubusercontent.com/u/71947586?v=4" alt="Foto do Autor" width={300} height={300}/> 
      </div>
      <div className="text-justify leading-relaxed px-20">
        Sou estudante de engenharia da computação pelo Centro Salesiano Universitário de São Paulo (UNISAL) na faculdade fui membro do grupo de Aeromodelismo do Centro Salesiano Universitário de São Paulo (UNISAL), participante do campeonato de programação do Centro Salesiano Universitário de São Paulo (UNISAL) e tive contato com vários tipos de linguagens de programação como, por exemplo, Dart, Java, Linguagem C, C++ e C# e framewoks como, por exemplo, Flutter.
      </div>
      </main>
    )
  }
  