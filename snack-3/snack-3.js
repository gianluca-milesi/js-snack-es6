/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
 */


function scliceArray(elements, start, end) {
    const result = [];

    if (start < 0) {
        start = 0;
    }

    if (end > elements.length) {
        end = elements.length;
    }

    if (end <= start) {
        console.log("end deve essere maggiore di start");
    }

    for (let i = start; i < end; i++) {
        const el = elements[i];
        console.log(el);
    }
}

const numbers = [4, 5, 6, 7, 2, 3, 7, 8, 54, 5, 8]
const newNumbers = scliceArray(numbers, 3, 6);