// Funkcja zwracająca losową liczbę z przedziału min - max
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let countGreaterThan10 = 0; // Licznik liczb większych od 10

// Losujemy 10 liczb
for (let i = 0; i < 10; i++) {
    let randomNumber = generateRandom(1, 20);
    
    // Jeśli wylosowana liczba jest większa od 10, zwiększamy licznik
    if (randomNumber > 10) {
        countGreaterThan10++;
    }
}

// Sprawdzamy, czy przynajmniej połowa (czyli 5 lub więcej) spełnia warunek
if (countGreaterThan10 >= 5) {
    console.log("udało się (wylosowano " + countGreaterThan10 + " liczb > 10)");
} else {
    console.log("niestety nie (wylosowano " + countGreaterThan10 + " liczb > 10)");
}