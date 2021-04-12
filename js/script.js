/*Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

$(document).ready(function() {

    //REFS

    //display in html
    var display = $(".display");
    
    //quanti numeri devo generare
    var size = 5;

    //array per contenere i numeri random
    var numberList = [];

    //array per contenere i numeri che l'utente ricorda
    var userNumberList = [];

    //array per i numeri corrispondenti
    var okNumbers = [];

    //array per i numeri non corrispondenti
    var nopeNumbers = [];



    //ciclo per ottenere i numeri random
    while (numberList.length < size) {
        var number = getRandomNumber (1, 100);

        if (! numberList.includes(number)) {
            numberList.push(number);
        }
    };
    console.log(numberList);


    //chiedi all'utente di memorizzare i numeri nell'array
    alert("Ricorda questi cinque numeri!\nTi diamo 30 secondi per memorizzarli\n" + numberList);


    //Countdown 30 secondi
    var seconds = 30; //setInterval è in ms, quindi in background 30*1000

    var interval = setInterval(function() {

        //quando il Countdown arriva a 0, c'è il prompt
        if (seconds === 0) {
            clearInterval(interval);
            //Chiedi all'utente di inserire i numeri che ricorda, per 5 volte
            for (var i = 1; i <= size; i++) {
                var user = parseInt(prompt("Inserisci numero " + i + "di " + size))
                userNumberList.push(user);
            }

            //confronto dei risultati
            for (var i = 0; i < userNumberList.length; i++) {
                //numeri ok
                if (numberList.includes(user[i])) {
                    okNumbers.push(user[i]);
                }
                //numeri nope
                else if (! numberList.includes(userNumberList[i] ) ) {
                    nopeNumbers.push(userNumberList[i]);
                }
            }

            //Risultato
            console.log("Di ", size, " ne hai sbagliati solo ", nopeNumbers.length , " complimenti!");
            console.log("Questi sono i numeri che hai inserito ", userNumberList);
        

            display.text("Tempo scaduto!");
        }
        else {
            display.text(seconds);
            seconds--;
        }
    }, 1000);

    


    //end doc ready
});




/***********
 * UTILITY *
 **********/

//funzione per generare numeri random univoci

function getRandomNumber (min, max) {
    return Math.floor (Math.random() * (max - min +1) ) + min;
}