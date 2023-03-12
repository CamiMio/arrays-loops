const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];


for (let i = 0; i < arrayA.length; i++) {
    const element1 = arrayA[i];

    if ( arrayA[i] < arrayB [i]) {
        console.log(element1);

    }
}

for (let i = 0; i < arrayB.length; i++) {
    const element2 = arrayB[i];
    if ( arrayB[i] < arrayA [i]) {
        console.log(element2);
}  

}




