var quanti_numeri = parseInt(prompt('Quanti numeri a partire da 1 vuoi elevare al cubo?'))
if (isNaN(quanti_numeri)) {
    console.log('Errore! Inserisci un numero');
}
else {
    for (var i = 1; i <= quanti_numeri; i++) {
        console.log(i + '^3 = ' + i**3);
    }
}
