import convert from 'convert-units';

function gigabytesEmBytes () {
    const gigabytes = Number(prompt('Digite a quantidade de Gigabytes que deseja converter:'));
    const conversao = convert(gigabytes).from('GB').to('B');
    console.log(conversao);
}

gigabytesEmBytes();
