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
                conteudo: `
                    <p>

                    </p>
                `
            }
        ]
    }
];

export const personagens = [
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
            <p>

            </p>
        `
    }
];

export const culturas = [       //Raça
    {
        id: 0,
        nome: '',
        aparencia_tipica: '',
        pontosFortes: [],
        pontosFracos: [],
        historia: `
            <p>

            </p>
        `
    }
];

export const rituais = [
    {
        id: 0,
        nome: '',
        ingredientes: [],
        descricao: `
            <p>

            </p>
        `
    }
]

export const criaturas = [
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