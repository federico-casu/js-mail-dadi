/* -------------------------------------------------------------------------------

** Mail **
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

------------------------------------------------------------------------------- */

//const userMail = prompt('Inserisci la tua mail');
const buttonHtml = document.querySelector('button');
const badgeSuccess = document.querySelector('div.container.bg-success');
const badgeDenied = document.querySelector('div.container.bg-danger');

buttonHtml.addEventListener('click', function(){
    const mailingList = ["marco@live.it", "giovanni@gmail.com", "andrea@hotmail.com", "luca@gmail.com", "gabriele@live.it"];
    let flag = false;
    const userMailHtml = document.getElementById('userMail');

    //console.log(userMailHtml.value);
    
    for (let i = 0; i < mailingList.length; i++) {
        const element = mailingList[i];
    
        if (userMailHtml.value === element) {
            flag = true;
        }
    }

    if (flag == true) {
        //console.log('Accesso eseguito');
        badgeSuccess.classList.remove('d-none');
        badgeSuccess.classList.add('d-block');
    } else {
        //console.log('Accesso negato');
        badgeDenied.classList.remove('d-none');
        badgeDenied.classList.add('d-block');
    }

})

