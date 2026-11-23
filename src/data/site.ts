/** Central de personalização: textos, fotos, links dos GIFs e data. */
export const birthday = {
  title: 'Beatriz — Nosso Infinito',
  name: 'Beatriz',
  nickname: 'Bea',
  sender: 'Eduardo',
};

export const photos = [
  { id: 1, src: '/photos/1.webp', title: 'Seu brilho', subtitle: 'Existe uma delicadeza no seu jeito que me faz sorrir sem perceber.', color: 'pink' },
  { id: 2, src: '/photos/2.webp', title: 'Seu olhar', subtitle: 'Às vezes, um olhar seu já deixa o meu mundo mais bonito.', color: 'violet' },
  { id: 3, src: '/photos/3.webp', title: 'Até no espelho', subtitle: 'Um retrato seu e mais um motivo para eu me apaixonar pelos detalhes.', color: 'blue' },
  { id: 4, src: '/photos/4.webp', title: 'Seu lado divertido', subtitle: 'Eu adoro o jeito leve e espontâneo que aparece nas suas fotos.', color: 'gold' },
  { id: 5, src: '/photos/5.webp', title: 'Um sorriso escondido', subtitle: 'Até nos seus momentos mais engraçados, você continua sendo encantadora.', color: 'pink' },
  { id: 6, src: '/photos/6.webp', title: 'Bea sendo Bea', subtitle: 'Nunca perca esse seu jeitinho de brincar e ser você mesma.', color: 'violet' },
  { id: 7, src: '/photos/7.webp', title: 'Seu jeitinho de Natal', subtitle: 'Nem o gorro, nem as luzes: a parte mais bonita da foto é você.', color: 'rose' },
  { id: 8, src: '/photos/8.webp', title: 'Os olhos que eu amo', subtitle: 'Mesmo com uma figurinha no rosto, seu olhar continua roubando a cena.', color: 'blue' },
  { id: 9, src: '/photos/9.webp', title: 'A pequena Beatriz', subtitle: 'É bonito imaginar quantos sonhos nasceram com essa menina tão especial.', color: 'pink' },
  { id: 10, src: '/photos/10.webp', title: 'Nossa história em desenho', subtitle: 'Se o nosso amor fosse um anime, eu escolheria viver todos os episódios com você.', color: 'violet' },
] as const;

// URLs diretas verificadas de páginas públicas no Tenor. Os vídeos podem ser substituídos
// por arquivos locais caso você obtenha os direitos de uso necessários.
export const gifs = {
  sasuke: 'https://media1.tenor.com/m/lUM-VY90vR8AAAAd/sasuke-sharingan.gif',
  sasukeMangekyou: 'https://media1.tenor.com/m/wExvN1tLTukAAAAd/sasuke-mangekyou.gif',
  gojo: 'https://media1.tenor.com/m/GXV82xs5pFgAAAAd/jujutsu-kaisen-satoru-gojo.gif',
  infinity: 'https://media1.tenor.com/m/LIdMA67LqKUAAAAd/gojo-infinity.gif',
  mitsuri: 'https://media1.tenor.com/m/ewZ1bdmRM-kAAAAd/love-breathing-mitsuri-demon-slayer.gif',
  tanjiro: 'https://media1.tenor.com/m/h-H5hg4UEkkAAAAd/tanjiro-hinokami-kagura.gif',
  yourName: 'https://media1.tenor.com/m/fkhbzMv25hQAAAAd/kimi-no-na-wa-your-name.gif',
  luffy: 'https://media1.tenor.com/m/3SUCL9RmwfMAAAAd/luffy-gear-5.gif',
};

export const letter = [
  'Feliz aniversário, Beatriz. ♡',
  'Eu pensei em muitas formas de te dar um presente especial. Mas nenhuma parecia suficiente para mostrar tudo o que você significa para mim. Então resolvi criar um pedacinho de universo onde cada detalhe me lembrasse você.',
  'Tem algo no seu olhar, no seu sorriso e nesse seu jeitinho tão seu que transforma coisas simples em momentos que eu gostaria de guardar para sempre. Até suas fotos mais engraçadinhas conseguem melhorar o meu dia.',
  'Eu gosto de pensar que ainda temos muitas histórias para viver. Não precisam ser aventuras grandiosas: eu quero os dias tranquilos, as conversas sem pressa, as risadas inesperadas e os abraços que fazem tudo parecer mais leve.',
  'Se o Gojo tem o infinito, se a Mitsuri conhece a Respiração do Amor e se o Sharingan pode enxergar tantos detalhes, eu tenho uma certeza muito mais simples: em qualquer universo, meu coração ainda encontraria você.',
  'Quero ver seus sonhos ganhando forma, suas conquistas chegando e seu sorriso aparecendo cada vez mais. Quero estar ao seu lado para comemorar as coisas boas e te apoiar quando os dias não forem tão fáceis.',
  'Feliz aniversário, meu amor. Você merece todo o carinho do mundo e muito mais. Obrigado por ser a minha Bea. Eu te amo. ♡',
];

export const islands = [
  { id: 'sorriso', label: 'Ilha do sorriso', emoji: '☀', photo: 7, text: 'O seu sorriso é um daqueles lugares onde meu coração gosta de ficar.', pos: { left: '13%', top: '56%' } },
  { id: 'abraco', label: 'Ilha do carinho', emoji: '♡', photo: 2, text: 'Se eu pudesse guardar uma sensação para sempre, seria a de estar pertinho de você.', pos: { left: '35%', top: '24%' } },
  { id: 'aventura', label: 'Ilha das risadas', emoji: '✧', photo: 4, text: 'Quero colecionar com você histórias bobas, lindas e inesquecíveis.', pos: { left: '64%', top: '54%' } },
  { id: 'eterno', label: 'Ilha do infinito', emoji: '∞', photo: 10, text: 'Se a vida fosse um anime, você seria a minha personagem favorita em todos os capítulos.', pos: { left: '84%', top: '22%' } },
] as const;
