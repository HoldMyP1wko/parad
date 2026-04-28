/*pod maską JavaScript wcale nie ma prawdziwych klas.
Słowo "class" to tylko ładniejsza, bardziej znana dla programistów z innych 
języków składnia, która ułatwia pisanie tego samego starego mechanizmu opartego
na prototypach i funkcjach konstruujących. */


String.prototype.mirror = function() {
    return this.split('').reverse().join('');
};