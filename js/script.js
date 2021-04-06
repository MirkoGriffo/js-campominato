/********

- Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).
- In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati la partita termina altrimenti continua chiedendo all’utente un altro numero.
- La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50


 */

var numeroMax;   //numeri giocabili
var numeroBombe = 16;  //bombe da generare
var listaBombe = [];  //numeri vietati
var numeriConsentiti = [];  //numeri corretti inseriti dall'utente
var utente = 0;


//scelta della difficoltà

var difficolta = parseInt(prompt('Inserisci la difficolta da 0 a 2').trim());

while (isNaN(difficolta) || difficolta < 0 || difficolta > 2) {
    difficolta = parseInt(prompt('Inserisci la difficolta da 0 a 2').trim());
}

switch (difficolta) {
    case 0:
        numeroMax = 100;
        break;

    case 1:
        numeroMax = 80;
        break;

    case 2:
        numeroMax = 50;
}

var possibilita = numeroMax - numeroBombe; //possibilità corrette


//Genera bombe: 16 numeri casuali univoci

while (listaBombe.length < numeroBombe) {

    var bomba = numeroRandom(numeroMax);

    if (!listaBombe.includes(bomba)) {

        listaBombe.push(bomba);
    }
}


console.log(listaBombe);



//se siamo sotto al numero delle possibilità

while ((numeriConsentiti.length < possibilita) && (!listaBombe.includes(utente))) {
    //scelta utente
    utente = parseInt(prompt("Inserisci un numero da 1 a " + numeroMax + "\nTentativi riusciti: " + numeriConsentiti.length + " di " + possibilita));
    //validazione
    while (isNaN(utente) || utente < 1 || utente > numeroMax) {
        utente = parseInt(prompt("Valore non valido, inserisci un numero da 1 a " + numeroMax))
    }

    //controllo scelta
    //numero già presente nella lista
    //il numero è una bomba

    if (listaBombe.includes(utente)) {
        alert("Hai perso, hai provato con successo " + numeriConsentiti.length + " volte prima di trovare la bomba");
    }
    else if (numeriConsentiti.includes(utente)) {
        alert("numero già inserito, inseriscine un altro");
    }
    else if (!numeriConsentiti.includes(utente)) {
        numeriConsentiti.push(utente);
    }

    //controllo raggiungimento delle possibilità
    if (numeriConsentiti.length === possibilita) {
        alert("Hai  vinto!!!");
    }
}

/*   
Funzioni
*/

function numeroRandom(max) {

    return Math.floor(Math.random() * max) + 1;

}