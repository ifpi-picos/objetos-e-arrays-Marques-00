
import convert from 'convert-units';

function diasEmMinutos() {
    const dias = Number(prompt('Digite a quantidade de dias que deseja converter:'));
    const conversao = convert(dias).from('d').to('min');
    console.log(conversao);
}

diasEmMinutos();
