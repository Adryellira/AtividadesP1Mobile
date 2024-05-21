const receitas = [
    {
        id: 1,
        titulo: 'Lasanha',
        descricao: 'Lasanha de carne moída',
        preparo: 'Cozinhe a massa segundo as orientações do fabricante, despeje em um refratário com água gelada para não grudar e reserve.Refogue o alho, a cebola, a carne moída, o molho de tomate, deixe cozinhar por 3 minutos e reserve. Derreta a margarina, coloque as 3 colheres de farinha de trigo e mexa. Despeje o leite aos poucos e continue mexendo. Por último, coloque o creme de leite, mexa por 1 minuto e desligue o fogo. Despeje uma parte do molho à bolonhesa em um refratário, a metade da massa, a metade do presunto, a metade da mussarela, todo o molho branco e o restante da massa. Repita as camadas até a borda do recipiente. Finalize com o queijo ralado e leve ao forno alto (220° C), preaquecido, por cerca de 20 minutos.',
        uri: 'https://static.itdg.com.br/images/640-400/ec2a5e38702c60bf1ace0b5f1c8e9415/shutterstock-739787011.jpg'
    },
    {
        id: 2,
        titulo: 'Batata',
        descricao: 'Batata Assada',
        preparo: 'Lave bem as batatas e embrulhe-as em papel manteiga. Leve ao forno quente até que fiquem macias. Bata a cebola, o iogurte, a hortelã, sal e pimenta no liquidificador. Reserve. Refogue o alho,coloque as 200g de queijo e junte os ingredientes batidos. Faça um corte no sentido longitudinal mas de maneira que não separe-as em metades. Coloque o molho na parte aberta com as batatas bem quentes.',
        uri: 'https://cristinatrovo.com.br/uploads/receitas/ScreenZShotZ2017-11-29ZatZ17.16.30.png'
    },
    {
        id: 3,
        titulo: 'Smoothie',
        descricao: 'Smoothie de banana e morango.',
        preparo: 'Bata todos os ingredientes no liquidificador e sirva. Adicione frutas por cima da bebida caso queira.',
        uri: 'https://cdn.shopify.com/s/files/1/0623/5871/6577/files/smoothies.jpg'
    },
    {
        id: 4,
        titulo: 'Pudim',
        descricao: 'Pudim de leite condensado',
        preparo: 'Primeiro, bata bem os ovos no liquidificador. Acrescente o leite condensado e o leite, e bata novamente; Calda: Derreta o açúcar na panela até ficar moreno, acrescente a água e deixe engrossar. Coloque em uma forma redonda e despeje a massa do pudim por cima; Asse em forno médio por 45 minutos, com a assadeira redonda dentro de uma maior com água. Espete um garfo para ver se está bem assado. Deixe esfriar e desenforme.',
        uri: 'https://static.itdg.com.br/images/640-400/d1307a2e17cda187df76b78cfd3ac464/shutterstock-2322251819-1-.jpg'
    },
]

const lasanha = [
    { id: 1, text: '500 g de massa de lasanha;' },
    { id: 2, text: '2 caixas de creme de leite;' },
    { id: 3, text: '3 colheres de farinha de trigo;' },
    { id: 4, text: '500 g de mussarela;' },
    { id: 5, text: '2 copos de leite;' },
    { id: 6, text: '3 colheres de óleo;' },
    { id: 7, text: '3 dentes de alho amassados;' },
    { id: 8, text: '500 g de carne moída;' },
    { id: 9, text: '3 colheres de manteiga;' },
    { id: 10, text: '500 g de presunto;' },
    { id: 11, text: 'sal a gosto;' },
    { id: 12, text: '1 cebola ralada;' },
    { id: 13, text: '1 caixa de molho de tomate;' },
    { id: 14, text: '1 pacote de queijo ralado.' },
];

const batata = [
    { id: 1, text: '2 unidades de batatas grandes;'},
    { id: 2, text: '2 copos de iogurte desnatado;'},
    { id: 3, text: '1/2 cebola picada;'},
    { id: 4, text: '1 dente de alho amassado;'},
    { id: 5, text: '2 colheres de sopa de hortelã picada;'},
    { id: 6, text: '200g de queijo minas frescal light;'},
    { id: 7, text: 'Sal a gosto;'},
    { id: 8, text: 'Pimenta do reino branca a gosto.'}
];

const smoothie = [
    { id: 1, text: '100ml de leite gelado;'},
    { id: 2, text: '3 a 5 pedaços de gelo;'},
    { id: 3, text: '3/4 de um copo de 200ml com morangos picados e congelados (ou polpa);'},
    { id: 4, text: '1 banana fresca ou congelada;'},
    { id: 5, text: 'Açúcar à vontade;'},
    { id: 6, text: 'Para mais cremosidade, você pode adicionar sorvete de creme.'},
];

const pudim = [
    { id: 1, text: '1 lata de leite condensado;'},
    { id: 2, text: '3 ovos inteiros;'},
    { id: 3, text: '1 lata de leite (medida da lata de leite condensado);'},
    { id: 4, text: 'Calda: 1 xícara (chá) de açúca e 1/2 xícara de água;'},
];

export { receitas, lasanha, batata, smoothie, pudim };