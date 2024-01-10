/* --------------------------------------------------------------------------------

** Gioco dei dadi **
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

-------------------------------------------------------------------------------- */

function randomNumber (max, min) {
    return Math.floor((Math.random() * max) + min);
}

const player1 = randomNumber(6, 1);
const player2 = randomNumber(6, 1);

console.log(player1, player2);

if (player1 > player2) {
    console.log(`Vince Giocatore 1 con il numero: ${player1}`);
} else if (player2 > player1) {
    console.log(`Vince Giocatore 2 con il numero: ${player2}`);
} else {
    console.log(`Abbiamo un pareggio! I numeri usciti sono: ${player1} e ${player2}`);
}
