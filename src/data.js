const livros = [
    {
        id: 0,
        titulo: '',
        resumo: '',
        capitulos: [
            {
                id: 0,
                titulo: '',
                subtitulo: '',
                conteudo: `
                    <p class="paragrafo">
                        
                    </p>
                `
            }
        ]
    }
];

const personagens = [
    {
        id: 0,
        nome: '',
        idade: 1,
        culturaId: 0,    //Raça
        rituaisConhecidosId: [],
        aparencia: '',
        personalidade: '',
        objetivos: [],
        boaRelacaoId: [],
        maRelacaoId: [],
        resumo: `
            <p class="paragrafo">

            </p>
        `
    }
];

const culturas = [       //Raça
    {
        id: 0,
        nome: 'Humanos',
        aparencia_atipica: 'Nenhuma',
        pontosFortes: ['Adaptabilidade', 'Versatilidade'],
        pontosFracos: ['Muitos para citar'],
        historia: `
            <p class="paragrafo">
                    A humanidade é uma cultura tal qual conhecemos na realidade, mas como é de se esperar, 
                ao se deparar com diversas outras culturas diferentes, acaba por rejeitá-las como sociedade. 
                A intolerância da humanidade levou as outras culturas a se isolarem dos humanos como medida 
                protetiva contra a possibilidade de instinção, até hoje existem humanos caçadores de vampiros, 
                bruxas, lobisomens, etc, enfim, tais caçadores possuem conhecimentos de artefatos, rituais e 
                o mais perigoso: as fraquezas letais das demais culturas.
            </p>
        `
    },
    {
        id: 1,
        nome: 'Vampiros',
        aparencia_atipica: 'Presas sugadoras de sangue, pele cadavérica, ouvidos capazes de morfizar no formato semelhante aos de um morcego',
        pontosFortes: ['Voa', 'Super-Velocidade', 'Analgesia Congênita', 'Imortalidade'],
        pontosFracos: ['Luz do Sol', 'Beber do sangue da própria cultura que não o próprio', 'Magías de banimento dos mortos', 'Sede'],
        historia: `
            <p class="paragrafo">
                    Os vampiros são mortos vivos cuja única fonte de alimentação é o sangue. Sua imortalidade é 
                a incapacidade de envelhecer, ficam presos às idades corporais do momento de suas mortes. São 
                sexualmente infertéis, se reproduzem transformando outras culturas em vampiros através do ritual 
                de vampirificação, mas isso não os empedem de amar. Geralmente são excepcionais em alguma atividade 
                expecífica por dedicarem seu ilimitado tempo nela, pode ser das artes místicas dos rituais à 
                algum instrumento musical.
            </p>
        `
    },
    {
        id: 2,
        nome: 'Bruxas',
        aparencia_atipica: 'Ninguém conhece a verdadeira aparência de uma bruxa, todas optaram por tomar uma forma humanizada, porém há sempre uma pequena irregularidade que passa despercebido',
        pontosFortes: ['Manipula energia arcana de forma natural'],
        pontosFracos: ['Qualquer ritual feito por uma bruxa é potente de mais para ser controlado, gerando resultados catastróficos', 'O ritual Chama Sagrada queima a alma de uma bruxa destruindo-a para sempre'],
        historia: `
            <p class="paragrafo">
                    As bruxas, e em casos muito raros bruxos, possuem duas almas, uma referente a consciência e outra que 
                é passada de geração em geração, a qual carrega aquilo que as torna bruxas. Existem muito mais bruxas do que 
                bruxos, sensato considerando que a existência de um bruxo significa o fim daquela linhagem, pois apenas uma mãe 
                pode passar a segunda alma dela adiante. De maneira geral, manipulam energia arcana como ninguém, podendo criar 
                magias,poções, maldições, encantamentos, artefatos, invocações, etc. Costumam preferir a propria companhia do 
                que fazer relações sociais, e ter uma personalidade egocentrica e arrogante. 
            </P>
        `
    }
];

const rituais = [
    {
        id: 0,
        nome: 'Vampirificação',
        ingredientes: ['Sangue de vampiro'],
        descricao: `
            <p class="paragrafo">
                    O alvo é mordido por um vampiro e seu sangue é completamente extraído do corpo, em seguida 
                o vampiro morde a si mesmo e derrama do próprio sangue na boca do alvo já morto e começa a recitar:
                "Daqui em diante faço-te sangue do meu sangue, morres quem foste e renasces um novo ser. Erga-se". 
                Assim o alvo ressuscita como vampiro, sem memória alguma de quando ainda era vivo.
            </p>
        `
    }
]

const criaturas = [
    {
        id: 0,
        nome: '',
        natureza: '',       // Ex.: Agressiva, Passífica, Neutra...
        habitat: '',
        habilidades: [],
        fraquezas: [],
        aparencia: '',
        nivelDeInteligencia: 0      // (0 - 100)% 0 - nenhuma; 100 - ser racional
    }
]