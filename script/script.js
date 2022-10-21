/*  CONSEGNA      Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).
****L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

         CONSEGNA     */

/* SVOLGIMENTO
  ? devo creare la griglia di gioco
  ? generare delle funzioni di : START
                                 RESET
                                 GENERARE BOMBE RANDOM
                                 GENERARE I BOX DELLA GRIGLIA
  ? al click del box accendere la cella se la casella è senza bomba
  ? se c'è una bomba devo fermare il gioco e visualizzare tutte le bombe

  ? al reset (su play??) devo resettare la griglia e crearne un altra

*/
const main = document.querySelector('.game-griglia');
const startBtn = document.querySelector('#start');
const level = document.querySelector('#level-option');

// in base al value dato alle option leggo tramite indice array il loro valore.
const levelGame = [100, 81, 49];

startBtn.addEventListener('click', start);

// in base al value delle option ottengo il numero delle celle totali della griglia
function start(){
  const boxNumber = levelGame[level.value];
  console.log(boxNumber);

//  console.log(-----> qui 1);

  // avrò per forza bisogno di una funzione di reset ?? ancora da definire ??
  reset()


  // creo la griglia in base alle opzione selezionata dato dalla const boxNumber
  createGriglia(boxNumber)
}


function reset(){
  main.innerHTML = '';
}


function createGriglia(boxNumber){
  const griglia = document.createElement('div');
  griglia.className = 'game-griglia';
//  console.log(--------> qui 2);

  // per forza per creare la griglia devo prima creare i box interni, creo la funzione e continuo
  for(let i = 1; i <= boxNumber; i++){
    const box = createBox(i, boxNumber)
    griglia.append(box);

  }
  main.append(griglia);
}
// console.log(-------> qui 3);


// dovrò dare anche un id al box
function createBox(idBox, boxNumber){
  const box = document.createElement('div');
  box.className = 'box';

  // con una classe box da CSS, scritta così avrò come risultato la classe completa stilata in CSS "box+NumLivello"
  box.classList.add('dim-'+boxNumber);
  box.idBox = idBox;
  box.innerHTML = `<span>${idBox}</span>`;
  return box;
}

//  console.log(------> qui 4);