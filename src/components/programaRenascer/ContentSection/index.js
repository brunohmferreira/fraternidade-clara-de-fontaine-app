import React from 'react';
import { Wrapper, StyledSpanText, StyledSpanTitle, StyledDiv, StyledDivContent, Bold } from './index.style';
import Accordion from '../../shared/Accordion';
import Carousel from '../../shared/Carousel';

const ContentSection = () => {

    const questionsAndAnswers = [
        {
          key: 1,
          title: 'O que os membros têm em comum?',
          content: (
              <>
                <p> Os membros do grupo têm em comum o fato de estarem buscando se libertar 
                    da dependência. Uns lutam para vencer as drogas ou os comportamentos 
                    compulsivos (jogo, comida, sexo, limpeza, etc), outros lutam contra 
                    os vícios morais. </p>
                <p> A luta pela libertação é, portanto, o traço comum entre os membros do 
                    grupo. Para isso todos estão dispostos a adotarem novos hábitos e um 
                    novo estilo de vida. </p>
              </>
            )
        },
        {
            key: 2,
            title: 'Que tipo de pessoas são admitidas no grupo?',
            content: (
                <>
                  <p> Podem participar do grupo pessoas de ambos os sexos, de qualquer idade, 
                      de qualquer raça, condição social crença religiosa cu política, etc. </p>
                  <p> Não há restrições quanto ao aspecto físico ou condição de saúde do 
                      participante, porém todos devem se enquadrar nos critérios de 
                      admissão. </p>
                </>
            )
        },
        {
            key: 3,
            title: 'Quais são os critérios de admissão?',
            content: (
                <>
                  <p> Para serem admitidos os candidatos devem: </p>
                  <p> 1. Manifestar interesse de se curar. </p>
                  <p> 2. Participar do programa de livre e espontânea vontade. </p>
                  <p> 3. Aceitar os termos dos “Compromissos dos membros do grupo” (vide item específico) </p>
                </>
            )
        },
        {
            key: 4,
            title: 'Quais os fundamentos do Programa?',
            content: (
                <>
                  <p> O programa se fundamenta nas seguintes constatações: </p>
                  <p> 1.As dependências têm raizes no Espírito. O Espirito é a sede 
                      dos desejos, das emoções, das concepções e valores do ser. Primeiro, 
                      a dependência espintual, depois a dependência fisica. Assim, 
                      a prioridade do programa, o seu objtivo principal, é o Espírito, 
                      essência do ser. </p>
                  <p> 2. Se a raiz da dependência está no espírito, a cura só pode vir 
                      de dentro para fora. Assim, a rigor somente existe autocura e nós 
                      somos agentes (e não pacientes) da nossa própria cura. </p>
                  <p> 3. O “remédio” seguro para a nossa autocura é a auto educação, através 
                      da qual modificamos os nossos valores e conceitos, nossa forma de 
                      enxergar a vida e o nosso papel dentro dela. </p>
                  <p> 4. Através do pensamento voltado para os vícios, atraímos companhias 
                      espirituais afins que acabam por interferir em nossa maneira de agir. </p>
                  <p> 5. Incentivos ao hábito da oração com o duplo objetivo: restabelecer o 
                      contato com Deus e com as forças Espirais superiores; Evitar a
                      sintonia inferior. </p>
                  <p> 6. Tratamentos espirituais diretos com passes e água fluidificada. </p>
                  <p> 7. Acompanhamento do progresso individual, através do qual cada um é 
                      auxiliado a superar suas dificuldades. </p>
                </>
            )
        },
        {
            key: 5,
            title: 'Sendo um programa espírita, o participante precisa se tornar espírita para usufruir dos seus benefícios?',
            content: (
                <>
                  <p> Não. A ninguém será exigido tornar-se espírita. Entendemos que todas 
                      as religiões cumprem um papel determinado na evolução individual de 
                      cada ser e, assim, no de toda a humanidade. Cada pessoa procura 
                      estabelecer contato com Deus e desenvolver o seu lado espiritual 
                      através da doutrina que melhor satisfaça as necessidades mais urgentes 
                      do seu processo evolutivo. Mas todos os caminhos de bons princípios 
                      levam a Deus. </p>
                  <p> Para usufruir dos benefícios do programa, basta que o participante 
                      queira mudar, que esteja aberto à crença num poder superior e se esforce 
                      para viver dentro dos princípios morais cristãos que, em última análise, 
                      se encontram na base de todas as religiões e doutrina sérias. O programa 
                      oferece subsídios para que aprendamos a viver dentro desses principios. 
                      No mais a ajuda vem de Deus. </p>

                </>
            )
        },
        {
            key: 6,
            title: 'Foi dito que a prioridade do programa é o Espírito. Como é que se faz o tratamento do Espírito?',
            content: (
                <>
                  <p> A recuperação do Espírito ocorre através da reforma íntima. Reformar-se 
                      intimamente significa superar as fraquezas e deficiências morais que 
                      os levam aos vícios, substituindo-as por sentimentos, emoções e 
                      comportamentos enobrecidos e espiritualmente elevados. </p>
                  <p> A reforma íntima, portanto, vem do autoconhecimento e da auto-educação. 
                      Ela é resultado de um movimento interno, conscientemente direcionado 
                      para a mudança de hábitos, de pensamentos, de desejos e de sentimentos. 
                      Logo, o programa não "trata o espírito", pois somente ele próprio pode 
                      se tratar, provocando em si mesmo esse "movimento", esta ação para a 
                      mudança. </p>
                  <p> O que o programa espírita faz é oferecer subsídios para que o 
                      participante atinja esse estágio de conciência da necessidade da 
                      mudança. Dessa consciência real que transforma o desejo da mudança 
                      em ação concreta para realizá-la. </p>

                </>
            )
        },
        {
            key: 7,
            title: 'Mas enquanto o participante não atinge esse estágio de busca da reforma íntima, como o programa o ajuda a se manter afastado da droga?',
            content: (
                <>
                  <p> Enquanto buscamos incorporar novas atitudes, novos hábitos em nossas 
                      vidas, o programa nos oferece ferramentas, instrumentos e técnicas 
                      que nos auxiliam a manter a abstinência. Muitas são dinâmicas de 
                      grupo que nos auxiliam nesses objetivos. </p>
                  <p> Não podemos nos esquecer, no entanto, que um tratamento espiritual 
                      está sendo feito parelamente, com o objetivo de nos aliviar do assédio 
                      espiniual e ainda de desinioxicar o nosso corpo perispiritual. Além 
                      disso contamos com os passes magnéticos e com a água fluidificada. </p>

                </>
            )
        },
        {
            key: 8,
            title: 'Não vou ficar entediado(a) com as reuniões?',
            content: (
                <>
                  <p> Sabemos que a maioria das pessoa não gosta de reuniões. A própria 
                      palavra "reunião" costuma ser associada a obrigação, o que, para
                      nós que sempre buscamos o prazer, soa como tédio ou monotonia. </p>
                  <p> Justamente para evitarmos que nossas reuniões se tornem monótonas 
                      e repetitivas, buscamos variar constantemente a sua temática e, 
                      por isso, fazemos diferentes tipos de reuniões. Assim, nunca 
                      ficamos entediados e, toda semana, ficamso aguardando ansiosamente 
                      o dia em que nos reuniremos de novo. </p>

                </>
            )
        },
        {
            key: 9,
            title: 'Alguém vai me pressionar a falar da minha dependência?',
            content: (
                <>
                  <p> No nosso programa, não falamos dos vícios e nem das drogas, falamos 
                      da cura, do nosso progresso individual e coisas assim. Para nós não 
                      interessa em que tipo de drogas ou comportamentos nos viciamos. 
                      Interessa-nos somente a cura, a libertação. </p>
                  <p> Há um dia especial para depoimentos. Nesse dia, fala quem quer sobre 
                      o que quiser. Mas o objetivo é o autoconhecimento, não uma espécie 
                      de "confissão de culpa". </p>
                  <p> Ao falar, o participante tem contato com os seus medos, as suas dúvidas, 
                      vitórias e fracassos. Cada um fala o que quiser. Pode relatar um 
                      problema em casa, o progresso na relação familiar, uma recaída ocorrida 
                      na semana, um fato em que se saiu vitorioso, etc. </p>
                </>
            )
        },
        {
            key: 10,
            title: 'Como nos comportarmos nas reuniões de depoimentos?',
            content: (
                <>
                  <p> Antes dos trabalhos, o coordenador instrui o grupo sobre como se 
                      comportar durante os depoimentos, colocando basicamente o que se 
                      segue: </p>
                  <p> 1. Nenhum participante do grupo deve criar polêmica, pretender 
                      debater ou criticar o depoimento de um companheiro. Não importa o 
                      que pense sobre o que ouvir, deverá se manter calado e em atitude 
                      de respeito. </p>
                  <p> 2. Ninguém deverá fazer perguntas ou incitar algum membro do grupo 
                      a falar. </p>
                  <p> 3. Ninguém deverá desmentir o companheiro ou revelar coisas que ele 
                      próprio não queira revelar. </p>
                  <p> 4. Nenhum membro do grupo citará o nome de outro membro em seu 
                      depoimento. </p>
                  <p> 5. Uma máxima do grupo é sempre lembrada: “O que você vê aqui... 
                      o que você ouve aqui... você deixa aqui". </p>
                  <p> 6. Quem não se sentir à vontade para falar, não será forçado. 
                      Falar ou não é uma decisão de cada um e deverá ser respeitada 
                      pelo grupo. </p>
                </>
            )
        },
        {
            key: 11,
            title: 'Teremos de ir a estas reuniões para o resto da nossa vida?',
            content: (
                <>
                  <p> Não, a não ser que se queira. A maioria de nós parece gostar cada 
                      vez mais das reuniões à medida que passam os anos de sobriedade. 
                      Deste modo, as reuniões são um prazer e não uma obrigação. </p>
                  <p> Alguns de nós faz da frequência das reuniões um hábito, como trabalhar, 
                      ler, assistir a espetáculos desportivos, a frequentar clubes sociais e 
                      participar de cultos religiosos. Isto torna mais sólida a base da nossa 
                      recuperação. </p>
                  <p> Porém, a maior parte de nós vai às reuniões com mais frequência nos 
                      primeiros anos de recuperação. Consideramos isso muito importante, 
                      porque no princípio, quando estamos tentando manter a abstinência, 
                      ficamos mais fortalecidos. </p>
                  <p> Mas consideramos um erro, deixar de participar do grupo ou espaçar 
                      a frequência quando estamos mais fortalecidos, porque podemos ficar 
                      muito autoconfiantes e recaírmos. Por causa disso, o nosso programa 
                      pede a todos os participantes que não se ausentem do grupo antes de 
                      completarem, no mínimo, dois anos de frequência. </p>
                </>
            )
        },
    ];

    const images = [
        {
          image: "\\images\\ProgramaRenascerLogo.png",
          caption: ""
        },
        {
          image: "\\images\\ProgramaRenascerImage1.png",
          caption: ""
        }
    ];

    return (
        <Wrapper>
            <StyledSpanText>
                <p> Trabalho voltado aos dependentes e seus familiares que promove a 
                    autotransformação visando a inserção consciente e harmoniosa no 
                    núcleo  familiar e na sociedade. </p>
                <p> Não tem interesse na transformação religiosa do indivíduo, mas sua 
                    conscientização para seu próprio processo em busca de Deus. São 
                    desenvolvidos estudos e debates ao longo do ano em busca da resolução 
                    das dificuldades com relação a dependência/codependência, a baixa 
                    autoestima, o complexo de inferioridade, sentimentos de culpa, etc. </p>
                <p> Este trabalho visa em especial o amparo aos dependentes de drogas, 
                    álcool e demais dependências e compulsões. </p>
                <p> Aberta a todos que necessitem de tal amparo, é realizada uma reunião 
                    semanal, tendo 25 pessoas atendidas em 2015. </p>
                <p> Lema: <Bold>"Ame a vida, não as drogas!"</Bold> (Luiz Antônio - espírito) </p>
            </StyledSpanText>
            <StyledDiv>
                <StyledSpanTitle>
                    Itens Principais
                </StyledSpanTitle>
                <StyledDivContent>
                    <StyledSpanText>
                        <p> Composto de 14 passos/módulos subdivididos originalmente em 188 reuniões 
                            -  há necessidade de participar das reuniões (atualmente online). </p>
                        <p> O vício é a manifestação externa da dependência espiritual. </p>
                        <p> O objetivo é a libertação da dependência espiritual </p>
                        <p> Fundamental a vontade de mudar </p>
                        <p> Considerar um tratamento mínimo de dois anos </p>
                        <p> Plano 24 horas: estabelecer compromisso consigo mesmo de evitar o uso do 
                            produto de dependência e também daquele causador dos vícios morais, por 24 
                            horas, assim vencendo sempre a cada dia </p>
                        <p> Reforma íntima: processo de autoconhecimento para mudar nossa estrutura de 
                            pensamento </p>
                    </StyledSpanText>
                </StyledDivContent>
            </StyledDiv>
            <StyledDiv>
                <StyledSpanTitle>
                    Perguntas Frequentes
                </StyledSpanTitle>
                <StyledDivContent>
                    <Accordion listOfItems={questionsAndAnswers} />
                </StyledDivContent>
            </StyledDiv>
            <StyledDiv>
                <Carousel data={images} />
            </StyledDiv>
        </Wrapper>
    );
};

export default ContentSection;