/** Central de personalização: textos, fotos, links dos GIFs e data. */
export const birthday = {
  title: 'Nosso Infinito — Feliz Aniversário',
  name: 'NOME DELA',
  nickname: 'Meu Amor',
  sender: 'NOME DELE',
  dateISO: '', // Opcional: ex. '2026-11-10T00:00:00-03:00'; vazio mostra mensagem de aniversário atrasado
  longDate: 'DATA DO ANIVERSÁRIO',
  shortDate: 'PARA SEMPRE',
};

export const photos = [
  { id: 1, src: '/photos/1.svg', title: 'Meu lugar favorito', subtitle: 'Qualquer lugar fica melhor quando estou com você.', color: 'pink' },
  { id: 2, src: '/photos/2.svg', title: 'Seu jeitinho', subtitle: 'São os detalhes que fazem você ser única.', color: 'violet' },
  { id: 3, src: '/photos/3.svg', title: 'Seu olhar', subtitle: 'Eu encontraria o meu caminho só de olhar para você.', color: 'blue' },
  { id: 4, src: '/photos/4.svg', title: 'Um dia de sol', subtitle: 'Você ilumina até os meus dias mais nublados.', color: 'gold' },
  { id: 5, src: '/photos/5.svg', title: 'Seu brilho', subtitle: 'Tem alguma coisa no seu sorriso que muda tudo.', color: 'pink' },
  { id: 6, src: '/photos/6.svg', title: 'Nós dois', subtitle: 'Se existir outra vida, espero te encontrar nela também.', color: 'violet' },
  { id: 7, src: '/photos/7.svg', title: 'Minha pessoa', subtitle: 'De todas as pessoas, foi em você que meu coração encontrou casa.', color: 'rose' },
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
  'Feliz aniversário atrasado, meu amor. ♡',
  'Eu poderia falar sobre todas as estrelas, todos os mundos e todos os universos que existem. Mas nenhum deles conseguiria explicar o quanto você é especial para mim.',
  'Quando penso em felicidade, penso no seu sorriso. Quando penso em um lugar seguro, penso no seu abraço. E quando penso no futuro, é você que eu espero encontrar em cada capítulo.',
  'Obrigado por ser você. Por existir. E por fazer parte da minha história.',
  'Eu te escolheria em qualquer realidade, em qualquer linha do tempo, em qualquer universo.',
  'Mesmo depois do seu dia, eu continuo celebrando a sorte de ter você. Eu te amo. ♡',
];

export const islands = [
  { id: 'sorriso', label: 'Ilha do sorriso', emoji: '☀', photo: 7, text: 'O seu sorriso é o meu sol favorito.', pos: { left: '13%', top: '56%' } },
  { id: 'abraco', label: 'Ilha do abraço', emoji: '♡', photo: 1, text: 'O meu porto seguro sempre vai ser o seu abraço.', pos: { left: '35%', top: '24%' } },
  { id: 'aventura', label: 'Ilha da aventura', emoji: '✧', photo: 4, text: 'Quero descobrir cada cantinho do mundo ao seu lado.', pos: { left: '64%', top: '54%' } },
  { id: 'eterno', label: 'Ilha do infinito', emoji: '∞', photo: 6, text: 'Se é com você, eu quero que dure para sempre.', pos: { left: '84%', top: '22%' } },
] as const;
