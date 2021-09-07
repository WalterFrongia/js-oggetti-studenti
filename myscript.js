// 1) CREARE UN OGGETTO CHE DESCRIVA UNO STUDENTE CON LE SEGUENTI PROPRIETA' : NOME, COGNOME ED ETA'.

var studente = {

    "nome": 'Riccardo',
    'cognome': 'Pinco',
    'eta': 23,
}

console.log(studente);


// 2) STAMPARE CON CICLO FOR TUTTE LE PROPRIETA' DELL'OGGETTO.

for (var key in studente){             
    console.log(key,studente[key]);     //Questo ciclo for impostato così serve per stampare tutti i valori dell'oggetto.
}



// 3) CREARE UN ARRAY DI OGGETTI DI STUDENTI.

var studenti =
[
    {
        'nome': "Walter",
        'cognome':"Frongia",
        'eta': 23,
    },
    {
        'nome': "Luca",
        'cognome':"Rossi",
        'eta': 24,
    },
    {
        'nome': "Raul",
        'cognome':"Bova",
        'eta': 43,
    }
]




// 4) CICLARE TUTTI GLI STUDENTI E STAMPARE PER OGNINO DI ESSI NOME E COGNOME.

for(let i = 0; i<studenti.length; i++){
    console.log(studenti[i]);
    let stud = studenti[i]; //Così prendo uno studente per ogni ciclo. per questo viene fatta questa variabile.
    console.log(stud.nome, stud.cognome);    //Questo invece (a differenza del primo ciclo), serve per prendere valori "specifici".
}





// 5) DARE LA POSSIBILITA' ALL'UTENTE CON 3 PROMPT DI AGGIUNGERE UN NUOVO OGGETTO STUDENTE INSERENDO NELL'ORDINE NOME COGNOME E ETA'.

//chiedere un nome all'utente

let nomeUtente = prompt("inserisci il tuo nome");

// chiedere cognome.

let cognomeUtente = prompt("Inserisci il tuo cognome");


//chiedere età.

let etaUtente = parseInt(prompt("Inserisci la tua età"));

//creare un oggetto con queste informazioni.

let nuovoStudente = {
    "nome":nomeUtente,
    "cognome":cognomeUtente,
    "eta":etaUtente,
}


//pushare l'oggetto nell'array studenti.

studenti.push(nuovoStudente)
console.log(studenti);