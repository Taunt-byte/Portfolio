import Image from "next/image";

export default function About() {
  return (
    <main>
      <div className="p-4">
        <div className="bg-gray-800 text-white rounded-lg flex justify-between">
          <div className="p-2">
            <Image
              src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*36bIjmFoSXV2Q6U_tJRmSw.jpeg"
              alt="Logo da UNISAL"
              width={600}
              height={600}
            />
          </div>
          <div className="text-justify eading-relaxed px-20">
            <h1 className="font-extrabold text-2xl text-center">
              Formação Academica
            </h1>
            <p>
              Fui estudante de engenharia da computação pelo Centro Salesiano
              Universitário de São Paulo (UNISAL) na faculdade fui membro do
              grupo de Aeromodelismo do Centro Salesiano Universitário de São
              Paulo (UNISAL), participante do campeonato de programação do
              Centro Salesiano Universitário de São Paulo (UNISAL) e tive
              contato com vários tipos de linguagens de programação como, por
              exemplo, Dart, Java, Linguagem C, C++ e C# e framewoks como, por
              exemplo, Flutter, Django e React.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4">
      <div className="bg-gray-800 text-white rounded-lg flex justify-between">
          <div className="text-justify eading-relaxed px-20">
            <h1 className="font-extrabold text-2xl text-center">
              Aeromodelismo
            </h1>
            <p>
              O clube de aeromodelismo da UNISAL foi fundado há alguns anos por
              um grupo de estudantes entusiastas, que queriam compartilhar sua
              paixão pelo hobby com outras pessoas, desde então, o clube tem
              crescido e se tornado uma parte importante da vida estudantil da
              UNISAL.
            </p>
            <p>
              Os membros do clube se encontram regularmente para construir e
              testar seus modelos de aeromodelismo, compartilhando técnicas e
              conhecimentos uns com os outros. Eles também organizam competições
              e demonstrações para outros estudantes e membros da comunidade.
            </p>
            <p>
              No meu primeiro ano de faculdade, em 2019, tive o privilégio de
              fazer parte desse grupo e contribuir em diversas etapas do
              projeto, além de ter a oportunidade de interagir com outras áreas
              do conhecimento.
            </p>
          </div>
          <div className="p-2">
            <Image
              src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*RIytHKzAkVlp94z5v7-sNg.jpeg"
              alt="Foto do Autor no clube de aeromodelismo"
              width={600}
              height={600}
            />
          </div>
      </div>
      </div>
      <div className="p-4">
        <div className="bg-gray-800 text-white pt-5 pb-5 flex justify-between rounded-lg">
          <div className="p-10">
            <Image
              src="https://github.com/Taunt-byte/Robo-de-reciclagem/blob/main/img/robo3.png?raw=true"
              alt="Foto do robo"
              width={600}
              height={600}
            />
          </div>
          <div className="text-justify eading-relaxed px-20">
            <h1 className="font-extrabold text-2xl text-center">
              Cultura Maker
            </h1>
            <p>
              Cultura Maker é um movimento que vem ganhando cada vez mais
              destaque na sociedade moderna, ele se refere a uma mentalidade de
              criar, prototipar e experimentar com tecnologia, materiais e
              ideias para produzir soluções criativas para problemas cotidianos.
            </p>
            <p>
              A Cultura Maker é alimentada por um conjunto de tecnologias
              emergentes, como impressoras 3D, cortadoras a laser e
              microcontroladores, que tornam mais fácil do que nunca criar
              coisas personalizadas e únicas, ela é também um movimento social
              que valoriza a colaboração, a aprendizagem em comunidade e o
              compartilhamento de conhecimento.
            </p>
            <p>
              Desde o meu primeiro ano na faculdade, em 2019, os alunos são
              incentivados a criar e compartilhar diversos tipos de projetos
              relacionados à Cultura Maker com a sociedade,a foto ao lado
              mostra um desses projetos desenvolvidos durante a graduação: um
              robô coletor de lixo.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
