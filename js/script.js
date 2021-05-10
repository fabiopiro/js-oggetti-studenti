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
console.log("--- --- --- Proprietà dell'oggetto 'studente'  --- --- ---");

for(var key in studente) {
    console.log(studente[key]);
    document.getElementById("studente").innerHTML += " " + studente[key];
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
console.log("--- --- --- Array Studenti --- --- ---");
console.log(studentiArray);

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
console.log("--- --- --- Nomi e Cognomi --- --- ---");

for (var i = 0; i < studentiArray.length; i++) {

    console.log(studentiArray[i].nome + " " + studentiArray[i].cognome);
    document.getElementById("array_studenti").innerHTML += "<li>" + studentiArray[i].nome + " " + studentiArray[i].cognome + "</li>";

}

// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.

// Oggetto vuoto
var studenteUtente = {

};

// Prompt
do {
    studenteUtente.nome = prompt("Inserisci nome");
} while (!isNaN(studenteUtente.nome));

document.getElementById("nuovo_studente").innerHTML = studenteUtente.nome + " ";

do {
    studenteUtente.cognome = prompt("Inserisci cognome");
} while (!isNaN(studenteUtente.cognome));

document.getElementById("nuovo_studente").innerHTML += studenteUtente.cognome + " ";

do {
    studenteUtente.età = parseInt(prompt("Inserisci età"));
} while (isNaN(studenteUtente.età));

document.getElementById("nuovo_studente").innerHTML += "(età: " + studenteUtente.età + ")";


console.log("--- --- --- Nuovo Studente --- --- ---");
console.log(studenteUtente);

// Push del nuovo studente
console.log("--- --- --- Push Nuovo Studente --- --- ---");

studentiArray.push(studenteUtente);
console.log(studentiArray);

