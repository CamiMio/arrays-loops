const numeros = [10, 22, 14, 87, 284];

let indice = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        indice = i
  
    } 
} 

if (indice === 0){
    console.log('-1');
} else {
    console.log (`a posição do indice é a ${indice}`);

}

    


