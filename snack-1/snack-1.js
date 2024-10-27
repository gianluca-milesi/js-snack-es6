/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

bikesArray = [
    {
        name: "bike-1",
        weight: 15
    },
    {
        name: "bike-2",
        weight: 17
    },
    {
        name: "bike-3",
        weight: 10
    }
];


lightestWeight = bikesArray[0].weight;

for (let i = 0; i<bikesArray.length; i++){
    console.log(bikesArray[i]);
    if(bikesArray[i].weight<lightestWeight){
        console.log(bikesArray[i].weight);
    }
}