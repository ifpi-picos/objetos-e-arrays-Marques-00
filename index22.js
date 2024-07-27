//Crie uma função que recebe um nome completo do usuário e imprime o primeiro e último nome.


// Nome completo do usuário
const nomeCompleto = 'Amanda Ferreira Marques';

// Divide o nome completo em partes usando o espaço como separador
const partes = nomeCompleto.split(' ');

// Acessa o primeiro nome e o último nome
const primeiroNome = partes[0];
const ultimoNome = partes[partes.length - 1];

// Imprime o primeiro e o último nome
console.log('Primeiro nome: ' + primeiroNome);
console.log('Último nome: ' + ultimoNome);

