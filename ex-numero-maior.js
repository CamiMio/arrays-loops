

const numeros = [3, 4, 1, 8, 11, 7, 5];

let maiornum = 0;

for (let i = 0; i < numeros.length; i++) {
    let testador = numeros[i];

    if (testador > maiornum) {
        maiornum = testador;
    }
}   
console.log(maiornum);

