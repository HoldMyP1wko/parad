// Zwraca losową liczbę z zakresu 0 - max
function random(max) {
    // +1 sprawia, że maksymalna wartość też może zostać wylosowana
    return Math.floor(Math.random() * (max + 1)); 
}

const numbers = [];

// Generujemy 20-elementową tablicę (np. liczby od 0 do 50)
for (let i = 0; i < 20; i++) {
    numbers.push(random(50));
}

// Sortujemy tablicę rosnąco
numbers.sort((a, b) => a - b);
console.log("Posortowana tablica:", numbers);

// Obliczamy sumę za pomocą metody reduce()
// Można to też zrobić zwykłą pętlą for, ale reduce jest nowocześniejsze
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Średnia to suma podzielona przez ilość elementów
const average = sum / numbers.length;

console.log("Suma wszystkich liczb:", sum);
console.log("Średnia wszystkich liczb:", average);