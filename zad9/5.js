/*Domknięcie powstaje gdy funkcja znajdująca się wewnątrz innej funkcji "pamięta" i ma dostęp do zmiennych funkcji otaczającej.
nawet w momencie gdy zewnętrzna funkcja skończyła swoje działanie */


function createCounter() {
    let count = 0; 
    
    return function() {
        count += 1;
        return count;
    };
}

let counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

let counter2 = createCounter();
console.log(counter2());
console.log(counter2());