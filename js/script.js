/*TRACCIA: Chiedi all'utente il suo nome, poi chiedi il suo cognome, poi chiedi il colore preferito, infine scrivi sulla pagina nomecognomecolorepreferito21.*/

/*
STEP:
1. prendo l'elemento dal DOM

2. preparo una variabile per il numero 21

3. chiedo all'utente il suo nome
3b. salvo il nome in una variabile

4. chiedo all'utente il suo cognome
4b. salvo il suo cognome in una variabile

5. chiedo all'utente il suo colore preferito
5b. salvo il suo colore preferito in una variabile

6. calcolo la password 

7. inserisco il risultato nel DOM
*/

//***ESERCIZIO***

// Prendo l'elemento dal DOM

const targetElement = document.getElementById("target");

// preparo una variabile per il numero 21

const userNumber = 21;

// chiedo all'utente il suo nome e (3b) lo salvo in una variabile

const userName = prompt("Come ti chiami?");

// chiedo all'utente il suo cognome e (4b) e lo salvo in una variabile

const userSurname = prompt("qual'è il tuo cognome?");

// chiedo all'utente il suo colore preferito e (5b) lo salvo in una variabile

const userColor = prompt("dimmi il tuo colore preferito");

// calcolo la password

const userPassword = userName + userSurname + userColor + userNumber;

//inserisco il risultato nel DOM
targetElement.innerText = `La tua password è: ${userPassword}`;
