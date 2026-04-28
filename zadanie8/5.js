function checkPalindrom(txt) {
    // 1. Zamieniamy tekst na małe litery
    const lowerTxt = txt.toLowerCase();
    
    // 2. Tworzymy odwrócony tekst
    const reversedTxt = lowerTxt.split('').reverse().join('');
    
    // 3. Sprawdzamy czy są identyczne
    return lowerTxt === reversedTxt;
}

// Przykłady:
// console.log(checkPalindrom("kajak")); // true
// console.log(checkPalindrom("Kajak")); // true
// console.log(checkPalindrom("programowanie")); // false