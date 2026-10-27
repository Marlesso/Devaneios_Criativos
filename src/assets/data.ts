export const livros = [
  {
    id: 0,
    titulo: '',
    resumo: '',
    capitulos: [
      {
        id: 0,
        titulo: '',
        subtitulo: '',
        conteudo: '',
      },
    ],
  },
]

export const personagens = [
  {
    id: 0,
    nome: '',
    idade: 1,
    culturaId: 0,
    rituaisConhecidosId: [] as number[],
    aparencia: '',
    personalidade: '',
    objetivos: [] as string[],
    boaRelacaoId: [] as number[],
    maRelacaoId: [] as number[],
    resumo: '',
  },
]

export const culturas = [
  {
    id: 0,
    nome: 'Humanos',
    aparencia_atipica: 'Nenhuma',
    pontosFortes: ['Adaptabilidade', 'Versatilidade'],
    pontosFracos: ['Muitos para citar'],
    historia:
      'A humanidade é uma cultura tal qual conhecemos na realidade, mas como é de se esperar, ao se deparar com diversas outras culturas diferentes, acaba por rejeitá-las como sociedade. A intolerância da humanidade levou as outras culturas a se isolarem dos humanos como medida protetiva contra a possibilidade de extinção. Até hoje existem humanos caçadores de vampiros, bruxas, lobisomens, etc. Tais caçadores possuem conhecimentos de artefatos, rituais e, o mais perigoso: as fraquezas letais das demais culturas.',
  },
  {
    id: 1,
    nome: 'Vampiros',
    aparencia_atipica:
      'Presas sugadoras de sangue, pele cadavérica, ouvidos capazes de se moldar em formato semelhante aos de um morcego',
    pontosFortes: ['Voar', 'Super-velocidade', 'Analgesia congênita', 'Imortalidade'],
    pontosFracos: [
      'Luz do Sol',
      'Beber do sangue da própria cultura que não o próprio',
      'Magias de banimento dos mortos',
      'Sede',
    ],
    historia:
      'Os vampiros são mortos-vivos cuja única fonte de alimentação é o sangue. Sua imortalidade é a incapacidade de envelhecer: ficam presos às idades corporais do momento de suas mortes. São sexualmente inférteis e se reproduzem transformando outras culturas em vampiros através do ritual de vampirificação, mas isso não os impede de amar. Geralmente são excepcionais em alguma atividade específica por dedicarem seu ilimitado tempo a ela, das artes místicas dos rituais a algum instrumento musical.',
  },
  {
    id: 2,
    nome: 'Bruxas',
    aparencia_atipica:
      'Ninguém conhece a verdadeira aparência de uma bruxa. Todas optaram por tomar uma forma humanizada, porém há sempre uma pequena irregularidade que passa despercebida.',
    pontosFortes: ['Manipulam energia arcana de forma natural'],
    pontosFracos: [
      'Qualquer ritual feito por uma bruxa é potente demais para ser controlado, gerando resultados catastróficos',
      'O ritual Chama Sagrada queima a alma de uma bruxa, destruindo-a para sempre',
    ],
    historia:
      'As bruxas, e em casos muito raros os bruxos, possuem duas almas: uma referente à consciência e outra passada de geração em geração, que carrega aquilo que as torna bruxas. Existem muito mais bruxas do que bruxos; sensato, considerando que a existência de um bruxo significa o fim daquela linhagem, pois apenas uma mãe pode passar a segunda alma adiante. De maneira geral, manipulam energia arcana como ninguém, podendo criar magias, poções, maldições, encantamentos, artefatos e invocações. Costumam preferir a própria companhia a relações sociais e podem ter uma personalidade egocêntrica e arrogante.',
  },
]

export const rituais = [
  {
    id: 0,
    nome: 'Vampirificação',
    ingredientes: ['Sangue de vampiro'],
    descricao:
      'O alvo é mordido por um vampiro e seu sangue é completamente extraído do corpo. Em seguida, o vampiro morde a si mesmo, derrama do próprio sangue na boca do alvo já morto e começa a recitar: “Daqui em diante faço-te sangue do meu sangue, morres quem foste e renasces um novo ser. Erga-se”. Assim, o alvo ressuscita como vampiro, sem memória alguma de quando ainda era vivo.',
  },
]

export const criaturas = [
  {
    id: 0,
    nome: '',
    natureza: '',
    habitat: '',
    habilidades: [] as string[],
    fraquezas: [] as string[],
    aparencia: '',
    nivelDeInteligencia: 0,
  },
]
