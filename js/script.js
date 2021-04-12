/*Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

$(document).ready(function() {

    //display in html
    var display = $(".display");
    
    //quanti numeri devo generare
    var size = 5;

    //array per contenere i numeri random
    var numberList = [];

    //array per contenere i numeri che l'utente ricorda
    var userNumberList = [];


    //ciclo per ottenere i numeri random
    while (numberList.length < size) {
        var number = getRandomNumber (1, 100);

        if (! numberList.includes(number)) {
            numberList.push(number);
        }
    }
    console.log(numberList);
    //chiedi all'utente di memorizzare i numeri nell'array
    alert("Ricorda questi cinque numeri. \n Ti diamo 30 secondi per memorizzarli " + numberList);



    //dopo 30 secondi chiedi all'utente di inserire i numeri che ricorda, per 5 volte
    var seconds = 30;

    //Coutdown
    var interval = setInterval(function() {
        if (seconds === 0) {
            clearInterval(interval);

            display.text("Tempo scaduto!");
        }
        else {
            display.text(seconds);
            seconds--;
        }
    }, 1000)
    


    //end doc ready
});

/***********
 * UTILITY *
 **********/

//funzione per generare numeri random univoci

function getRandomNumber (min, max) {
    return Math.floor (Math.random() * (max - min +1) ) + min;
}