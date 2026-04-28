const text = {
    check(txt, word) {
        return txt.includes(word);
    },

    getCount(txt) {
        return txt.length;
    },

    getWordsCount(txt) {
        if (txt.trim() === "") return 0;
        return txt.trim().split(/\s+/).length;
    },

    setCapitalize(txt) {
        return txt
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    },

    setMix(txt) {
        let result = "";
        for (let i = 0; i < txt.length; i++) {
            if (i % 2 === 0) {
                result += txt[i].toLowerCase();
            } else {
                result += txt[i].toUpperCase();
            }
        }
        return result;
    },

    generateRandom(lng) {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        let result = "";
        for (let i = 0; i < lng; i++) {
            const randomIndex = Math.floor(Math.random() * alphabet.length);
            result += alphabet[randomIndex];
        }
        return result;
    }
};

console.log(text.check("kot ma ale", "ma"));
console.log(text.getCount("testowy napis 123"));
console.log(text.getWordsCount("Ala ma kota"));
console.log(text.setCapitalize("kot ma ale"));
console.log(text.setMix("testset kot"));
console.log(text.generateRandom(10));