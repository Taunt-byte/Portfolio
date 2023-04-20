import Image from "next/image";

export default function About() {
  return (
    <main>
      <div className="bg-gray-800 text-white pt-5 pb-5">
        <div className="flex justify-between">
          <div className="p-10">
            <Image
              src="https://oabcampinas.org.br/wp-content/uploads/2017/01/logo_unisal.jpg"
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
      <div className="bg-gray-800 text-white pt-5 pb-5">
        <div className="flex justify-between">
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
          <div className="p-10">
            <Image
              src="https://scontent.fubt1-1.fna.fbcdn.net/v/t1.6435-9/71569395_2469796533057287_4759893154990129152_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=FLapwLnoa6MAX8LQrFD&_nc_ht=scontent.fubt1-1.fna&oh=00_AfAr2jCkZSEDF6rAMiyo0gZUzpIvsV_2CpSMIKStCy3lDw&oe=64690011"
              alt="Foto do Autor no clube de aeromodelismo"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white pt-5 pb-5">
        <div className="flex justify-between">
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
