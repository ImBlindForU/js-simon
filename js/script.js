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


let result = []
let userNumberscorrect =[]

console.log(userNumberscorrect)

// stasmpo il messaggio del risultato
const message = document.querySelector("p")




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
        let userResult = parseInt(prompt("dimmi un numero da 1 a 9")) 
        result.push(userResult) 
        console.log(result)
    }

//    risspote corrette utente
    for(let u = 0; u < 5; u++){
        // verifico se result u e tra i numer random
        if(rdnNumbers.includes (result[u] )) {
            // pusho questo numeroi dentro userNumberscorrect
            userNumberscorrect.push (result[u])
            console.log(userNumberscorrect);
            message.innerHTML = userNumberscorrect
        }
    }
    
}

setTimeout(timeFinished, 3000);