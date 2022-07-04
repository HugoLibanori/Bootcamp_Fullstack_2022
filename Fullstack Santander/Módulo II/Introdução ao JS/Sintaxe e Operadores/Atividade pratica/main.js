function analizando(x, y) {
    const primeiraFrase = criaPrimeiraFrase(x, y);
    const segundaFrase = criaSegundaFrase(x, y);

    return `${primeiraFrase} ${segundaFrase}`;
}


function criaPrimeiraFrase(x, y) {
    let saoIguais = '';

    if (saoIguais) {
        saoIguais = 'não';
    }

    return `Os números ${x} e ${y} ${saoIguais} são iguais.`;
}

function criaSegundaFrase(x, y) {
    const soma = x + y;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const comp10 = soma > 10;
    const comp20 = soma > 20;

    if(comp10) {
        resultado10 = 'maior'
    }

    if(comp20) {
        resultado20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(analizando(1, 2));