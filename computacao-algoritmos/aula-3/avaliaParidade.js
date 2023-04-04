// console.log('Hello World');
// console.log('Fundamentos de Computação e Algoritmos');

avaliaPatidade(10);


function avaliaPatidade(limiteSuperior) {
    console.clear();
    for (let i = 0; i <= limiteSuperior; i++) {
        if (i % 2 == 0)
            console.log(i + ' é par');
        else
            console.log(i + ' é ímpar');
    }
}



