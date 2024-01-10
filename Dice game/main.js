/* --------------------------------------------------------------------------------

** Gioco dei dadi **
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

-------------------------------------------------------------------------------- */

function randomNumber (max, min) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
function randomDice() {
    return faces[randomNumber(faces.length-1, 0)];
}

const playBtnHtml = document.getElementById('playBtn');
const tableHtml = document.getElementById('table');
const faces = ["dado1.png", "dado2.png", "dado3.png", "dado4.png", "dado5.png", "dado6.png"];

const positions = [0, 50];

playBtnHtml.addEventListener('click', function(){
    const player1 = randomDice();
    const player2 = randomDice();

    tableHtml.innerHTML = 
        `
            <figure style="width: 100px; border: 2px solid blue; border-radius: 20px;" class="m-0 position-absolute top-${positions[randomNumber(1, 0)]} end-${positions[randomNumber(1, 0)]}">
                <img class="img-fluid" src="./assets/img/${player1}" alt="dice">
            </figure>
            <figure style="width: 100px; border: 2px solid red; border-radius: 20px;" class="m-0 position-absolute bottom-${positions[randomNumber(1, 0)]} start-${positions[randomNumber(1, 0)]} ">
                <img class="img-fluid" src="./assets/img/${player2}" alt="dice">
            </figure>
        `
    ;

    console.log(player1, player2);

    if (player1 > player2) {
        console.log(`Vince Giocatore 1 con il numero: ${faces.indexOf(player1)+1}`);
    } else if (player2 > player1) {
        console.log(`Vince Giocatore 2 con il numero: ${faces.indexOf(player2)+1}`);
    } else {
        console.log(`Abbiamo un pareggio! I numeri usciti sono: ${faces.indexOf(player1)+1} e ${faces.indexOf(player2)+1}`);
    }
})





