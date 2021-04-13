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



    //ciclo per ottenere i numeri random
    while (numberList.length < size) {
        var number = getRandomNumber (1, 100);

        if (! numberList.includes(number) ) {
            numberList.push(number);
        }
    };
    console.log(numberList);


    //chiedi all'utente di memorizzare i numeri nell'array
    alert("Ricorda questi cinque numeri!\nTi diamo 30 secondi per memorizzarli\n" + numberList);





    //Countdown 30 secondi
    var seconds = 3; //setInterval è in ms, quindi in background 30*1000

    var interval = setInterval(function() {

        //quando il Countdown arriva a 0, c'è il prompt
        if (seconds === 0) {
            clearInterval(interval);

            //Chiedi all'utente di inserire i numeri che ricorda, per 5 volte
            var userNumbers = [];

            while (userNumbers.length < size) {
                var newUserNumber = parseInt(prompt ("Inserisci il " + (userNumbers.length + 1) + " numero") );

                while (isNaN(newUserNumber) ) {
                    newUserNumber = parseInt(prompt ("Non valido! Inserisci il " + (userNumbers.length + 1) + "numero") );
                }

                //controllare chei numeri non siano già stati inseriti
                if (! userNumbers.includes(newUserNumber) ) {
                userNumbers.push(newUserNumber);
                }
                else {
                alert ("Numero già inserito!");
                }
            }
            

            //numeri ok
            var okNumbers = [];
            for (var i = 0; i < userNumbers.length; i++) {

                if(numberList.includes(userNumbers[i]) ) {
                    okNumbers.push(userNumbers[i]);
                }
            }

            //Risultato
            alert ("RISULTATI \nI numeri che dovevi ricordare " + numberList + "\nI numeri che hai inserito " + userNumbers + "\nI numeri che hai indovinato " + okNumbers + "\nComplimenti, ne hai indovinati " + okNumbers.length);
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