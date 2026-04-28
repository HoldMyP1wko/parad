class Book {
    // Konstruktor uruchamia się automatycznie przy tworzeniu nowej instancji klasy
    constructor() {
        this.users = []; // Na początku tablica jest pusta
    }

    // Dodawanie użytkownika
    addUser(name, age, phone) {
        // Używamy skróconego zapisu ES6 dla obiektów (name: name -> name)
        const newUser = { name, age, phone };
        this.users.push(newUser);
    }

    // Wypisywanie wszystkich użytkowników
    showUsers() {
        console.log("Wszyscy użytkownicy w książce:");
        // Iterujemy po tablicy pętlą for...of
        for (const user of this.users) {
            console.log(`- ${user.name}, wiek: ${user.age}, tel: ${user.phone}`);
        }
    }

    // Szukanie po imieniu
    findByName(name) {
        const foundUser = this.users.find(user => user.name === name);
        
        if (foundUser) {
            console.log("Znaleziono użytkownika:", foundUser);
            return foundUser;
        } else {
            console.log(false);
            return false;
        }
    }

    // Szukanie po numerze telefonu
    findByPhone(phone) {
        const foundUser = this.users.find(user => user.phone === phone);
        
        if (foundUser) {
            console.log("Znaleziono użytkownika:", foundUser);
            return foundUser;
        } else {
            console.log(false);
            return false;
        }
    }

    // Wypisywanie liczby użytkowników
    getCount() {
        console.log(`Liczba użytkowników w książce: ${this.users.length}`);
    }
}

// Testowanie klasy:
/*
const myBook = new Book(); // Tworzymy nową książkę z naszej "foremki"

myBook.addUser("Anna", 28, "123-456-789");
myBook.addUser("Piotr", 35, "987-654-321");
myBook.addUser("Tomasz", 40, "555-555-555");

myBook.showUsers();
myBook.getCount();

myBook.findByName("Piotr"); // Znajdzie i wypisze obiekt Piotra
myBook.findByName("Kamil"); // Wypisze false, bo Kamila nie ma

myBook.findByPhone("555-555-555"); // Znajdzie Tomasza
*/