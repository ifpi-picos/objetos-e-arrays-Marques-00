const filmes = []
const filmesAssistidos = []
//título do filme e o ano de lançamento
function adicionarfilme() {
  let filme;
  do {
    filme = prompt("\nDigite o filme a ser adicionado (ou deixe em branco para finalizar:");
    if (filme) {
      const anoLacamento = Number(prompt("Digite o ano de lançamento :"));
      filmes.push({ titulo: filme, ano: anoLacamento });
      console.log(`Filme Adicionado : ${filme} (${anoLacamento})`);
    }
  } while (filme);
}

function ordenarPorTitulo() {
  filmes.sort((a, b) => a.titulo.localeCompare(b.titulo));
}

function ordenarPorAno() {
  filmes.sort((a, b) => a.ano - b.ano);
}
function pesquisarfilmes() {
  const pesquisar = prompt('Digite o filme que deseja pesquisar: ')

  let filmeAchado = filmes.find((filme) => filme.titulo == pesquisar)

  if (filmeAchado) {
    console.log(pesquisar, 'está na lista')
  } else {
    console.log(pesquisar, 'não está na lista')
  }
}
function exibirfilmes() {
  console.log(filmes)
}
function marcarcomoAssistido() {
  if (filmes.length === 0) {
    console.log("Não há filmes para marcar como assistido.")
  } else {
    const filmeAssistido = filmes.shift(); // Remove o primeiro elemento

    filmesAssistidos.push(filmeAssistido);
    console.log(filmeAssistido.titulo + " marcado como assistido.");
  }
}

function removerFilme() {
  if (filmes.length > 0) {

    const pesquisar = prompt('Digite o filme que deseja remover: ')
    let filmeAchado = filmes.findIndex((filme) => filme.titulo == pesquisar)
    if (filmeAchado) {
      filmes.splice(filmeAchado, 1);
      console.log(pesquisar, 'foi removido')

    } else {
      console.log(pesquisar, 'não está na lista')
    }
  }
}


let i = true 
while (i) {
  console.log(`OPÇÕES
    1-Adicionar filme
    2-Ordenar por titulo
    3-Ordenar por Ano
    4-Pesquisar filmes
    5- Exibir filmes
    6- Marcar como Assistido
    7-Remover Filme
    8- Encerrar programa`)
  const opcao = Number(prompt('\n Digite um número como opção: '));
  switch (opcao) {
    case 1:
      adicionarfilme()
      break;
    case 2:
      ordenarPorTitulo()
      break;
    case 3:
      ordenarPorAno()
      break;
    case 4:
      pesquisarfilmes()
      break;
    case 5:
      exibirfilmes()
      break;
    case 6:
      marcarcomoAssistido()
      break;
    case 7:
      removerFilme()
      break;
    case 8:
      console.log('encerrando...')
      i = false
      break;
    default:
      console.log('opçao inválida')
  }
}