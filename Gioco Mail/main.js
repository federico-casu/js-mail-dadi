/* -------------------------------------------------------------------------------

** Mail **
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

------------------------------------------------------------------------------- */

const userMail = prompt('Inserisci la tua mail');
const mailingList = ["marco@live.it", "giovanni@gmail.com", "andrea@hotmail.com", "luca@gmail.com", "gabriele@live.it"];
let flag = false;


for (let i = 0; i < mailingList.length; i++) {
    const element = mailingList[i];

    if (userMail === element) {
        flag = true;
    }
}

if (flag == true) {
    console.log('Accesso eseguito')
} else {
    console.log('Accesso negato')
}