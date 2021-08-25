// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array
// 1)crea array vuoto
// 2) chiedi 6 volte all'utente di inserire un numero
// 3 se il numero e dispari va pushato nell'array 
var numeri = [];



for (i = 0; i < 6; i++){
    var numero = prompt("inserisci un numero")
    if (numero % 2) {
        numeri.push(numero);
    }
}

console.log(numeri)