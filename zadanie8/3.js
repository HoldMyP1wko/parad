function printNumbers(nr) {
    let result = ""; // Zmienna, w której będziemy budować nasz tekst
    
    for (let i = 1; i <= nr; i++) {
        result += i;
        // Opcjonalnie: żeby liczby nie zlewały się w jedno (np. "12345"), 
        // możemy dodać przecinek i spację, o ile to nie jest ostatnia liczba.
        if (i < nr) {
            result += ", ";
        }
    }
    
    return result;
}

// Przykład:
// console.log(printNumbers(5)); // Wypisze: "1, 2, 3, 4, 5"