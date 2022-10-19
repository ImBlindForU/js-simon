// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// creare la funzione per i random numbers
// applicarla per 5 random numbers su html
// settare il tempo per 30 secondi
// al termine esce un prompt
// l'utente scrive i 5 numeri
// se i numeri corrispondo a quelli random allora restituisci true 
// altrmenti restitutisci false

// dati di costanti
let rdnNumbers = getRndInteger(1, 10, 5)
console.log(rdnNumbers)
// stampare il risultato
const numbers = document.querySelector("h1")

numbers.innerHTML = rdnNumbers


// FUNCTION

// funzione per i numeri random
function getRndInteger(min, max, times) {
    const randoms = [];
    for(let i = 0; i < times; i++ ){
        randoms.push(Math.floor(Math.random() * (max - min) + min))
    }
    return randoms
}


// funzione per il cronometro dei 30 secondi
function timeFinished(){
    // togliere l'h1
    numbers.innerHTML = ""
    // chiedi al utente un numero per 5 volte
    for(let n = 0; n < 5; n++){
        let userResult
        userResult = parseInt(prompt("dimmi un numero")) 
      

       result = userResult
       console.log(result)
    }

    // se rdnNumbers e incluso all intero di user result true
    // altrimenti false
    let boolean = ""
    if (rdnNumbers.includes(result)){
        boolean = true
    } else {
        boolean = false
    }

    console.log(boolean)
}

setTimeout(timeFinished, 3000);