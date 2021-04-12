/*Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

$(document).ready(function() {
    
    //quanti numeri devo generare
    var size = 5;

    //array per contenere i numeri random
    var numberList = [];

    while (numberList.length < size) {
        var number = getRandomNumber (1, 100);

        if (! numberList.includes(number)) {
            numberList.push(number);
        }
    }

    console.log(numberList);


    //end doc ready
});

/***********
 * UTILITY *
 **********/

//funzione per generare numeri random univoci

function getRandomNumber (min, max) {
    return Math.floor (Math.random() * (max - min +1) ) + min;
}