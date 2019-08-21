
// Stwórz funkcje przyjmującą jeden parametr, typ tekstowy
// funkcja zwara typ tekstowy
// jesli parametr zaczyna sie od ts to zwroc bez zmian
// w innym wypadku dodaj 'ts' na poczatku

function prefixer(word : string) : string {

    if(word.substr(0,2)==="ts") {
        return word;
    } else {
        return `ts${word}`;
    }

}

console.log(`${prefixer("ts jest super")}`);
console.log(`${prefixer("kaczka")}`);