/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
*/

soccerTeams = [
    {
        name: "Roma",
        scoredPoints: 0,
        foulsSuffered: 0
    },
    {
        name: "Milan",
        scoredPoints: 0,
        foulsSuffered: 0
    },
    {
        name: "Inter",
        scoredPoints: 0,
        foulsSuffered: 0
    },
];


function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 101);
    return randomNumber;
}

for (let i = 0; i < soccerTeams.length; i++) {
    console.log(soccerTeams[i]);

    soccerTeams[i].scoredPoints += generateRandomNumber();
    soccerTeams[i].foulsSuffered += generateRandomNumber();
}
console.log(soccerTeams);


//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
/* prova:
let nuovoOggetto = {
    name: soccerTeams[i].name,
    foulsSuffered: soccerTeams[i].foulsSuffered
};
namesFouls.push(nuovoOggetto);
*/

namesFouls = [];

for (let i = 0; i < soccerTeams.length; i++) {
    namesFouls.push({
        name: soccerTeams[i].name,
        foulsSuffered: soccerTeams[i].foulsSuffered
    });
}

console.log("Solo nomi e falli subiti", namesFouls);







