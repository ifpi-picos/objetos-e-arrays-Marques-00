//Utilize a lista de filmes do exercício anterior e exiba no console cada um dos filmes informados usando um for tradicional.

const filmes = [];
for (let i = 0; i < 5; i++){
  filmes.push (prompt("Digite o nome do filme:"));
}

for (let i = 0; i < filmes.length; i++){
  console.log (filmes[i])
}
  