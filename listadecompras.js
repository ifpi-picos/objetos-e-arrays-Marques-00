const lista = []

function adicionaritem (){
  let item;
  do{
    item = prompt('Digite o item a ser adicionado (ou deixe em branco para finalizar): ')
    if(item) {
      lista.push(item)
      console.log (`item adicionado: ${item}`)
    }
  } while(item)
}

function removeritem (){
  const item = prompt('Digite o item que deseja remover: ')
  for (i = 0; i < lista.length; i++) {
    if(lista[i] === item){
      lista.splice(i, 1)
      console.log(item, 'removido')
      return
    }
  }
  console.log('Item não encontrado')
}


function pesquisarItem() {
  const item = prompt('Digite o item que deseja pesquisar: ')
  if(lista.includes(item)) {
    console.log(item, 'está na lista')
  } else{
    console.log(item, 'não está na lista')
  }
}

function ordenaralista (){
  lista.sort ();
  console.log ('lista ordenada')
}

function exibirlista (){
  
  console.log (lista)
}

function limparlista (){
  lista.length = 0
}

let i = true
while  (i){
  console.log (`OPÇÕES
  1-Adicionar item
  2-Remover item
  3-Pesquisar item:
  4-Ordenar a lista
  5- Exibir lista
  6-Limpar a lista
  7-Encerrar o programa`)

const opcao = Number(prompt('\n Digite um número como opção: '))

switch (opcao) {
  case 1:
    adicionaritem ()
    break;
  case 2:
    removeritem ()
    break;
  case 3:
    pesquisarItem ()
    break;
  case 4:
    ordenaralista()
    break;
  case 5:
    exibirlista ()
    break;
  case 6:
    limparlista ()
    break;
  case 7:
    console.log ('programa encerrado')   
    i = false
    break;
  default:
    console.log ('opçao inválida')
}
}
