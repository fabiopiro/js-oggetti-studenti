/*
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.
*/

// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
    nome: "Fabio",
    cognome: "Piroddi",
    età: 27,
};

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for(var key in studente) {
    console.log(studente[key]);
}

// Creare un array di oggetti di studenti.
var studentiArray = [
    {
        nome: "Mario",
        cognome: "Rossi",
        età: 18,
    },

    {
        nome: "Gennaro",
        cognome: "Verdi",
        età: 20,
    },

    {
        nome: "Pietro",
        cognome: "Smusi",
        età: 22,
    },

    {
        nome: "Paolo",
        cognome: "Bianchi",
        età: 24,
    },

    {
        nome: "Luca",
        cognome: "Neri",
        età: 26,
    },
];

console.log(studentiArray);

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
console.log("Stampa nomi e cognomi --- --- ---");

for (var i = 0; i<studentiArray.length; i++) {

    console.log(studentiArray[i].nome + " " + studentiArray[i].cognome);

}

// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.

// Oggetto vuoto
var studenteUtente = {

};

// Prompt
studenteUtente.nome = prompt("Inserisci nome");

studenteUtente.cognome = prompt("Inserisci cognome");

studenteUtente.età = prompt("Inserisci età");

console.log(studenteUtente);


studentiArray.push(studenteUtente)
console.log(studentiArray);

