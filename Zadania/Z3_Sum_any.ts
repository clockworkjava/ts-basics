{
// Stwórz funkcje, która zwróci wynik dodawana dwóch liczb,
// przyjmujemy jednak, że parametry do funkcji przychodzą z
// zewnątrz, nie przeszły żadnej kontroli

    const sum = (a: any, b: any) : number => {

        if(typeof a === "number" && typeof b === "number") {
            return a+b;
        } else {
            throw new Error("Niepoprawne parametry dla funkcji")
        }
    }   

    console.log(`${sum(5,5)}`);
    sum("dwa","trzy");

}