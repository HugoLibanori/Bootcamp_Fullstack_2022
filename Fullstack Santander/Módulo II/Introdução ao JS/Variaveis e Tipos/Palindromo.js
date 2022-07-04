function invertendo(string) {
    let juntar = string.toUpperCase().replace(/ /g, "");
    let inverter = string.split('').reverse().join('');
    let Upinverter = inverter.toUpperCase().replace(/ /g, "");

    if(Upinverter === juntar) {
        console.log(`A frase "${juntar}" de traz para frente é "${Upinverter}", é um PALÍNDROMO.`);
    }else {
        console.log(`A frase "${juntar}" de traz para frente é "${Upinverter}", NÃO é um PALÍNDROMO.`);
    }
}

invertendo('roma');