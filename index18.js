//Crie um array de objetos representando carros, cada um com propriedades nome e ano, e use filter para criar um novo array contendo apenas os carros fabricados após o ano 2010.

const carros = [{nome:'gol', ano:2000},
    {nome : 'fusca', ano:2010},
    {nome : 'uno', ano:2011},
    {nome : 'celta', ano:2012}]
    const carrosNovos = carros.filter(carro => carro.ano > 2010)
    console.log (carrosNovos);