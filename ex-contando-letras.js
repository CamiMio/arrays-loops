// encontrar letras "E" e "e"

const letras = ["A", "a", "B", "C", "L", "z"];

let quantidade = 0

for (let letra of letras ) {
    if (letra === "E" || letra === "e") {
    quantidade++;
            
    }
}    

if (quantidade === 0){
    console.log('Não foram encontradas letras "E" e "e" ');

} else {
    console.log( `foram encontradas ${quantidade} letras "e" e "E" `);
}




  