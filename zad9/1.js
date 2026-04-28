const currentUser = {
    // Właściwości
    name: "Jan",
    surname: "Kowalski",
    email: "jan.kowalski@example.com",
    www: "https://mojastrona.pl",
    userType: "admin",
    isActive: true,

    // Metoda wypisująca dane w konsoli
    show() {
        console.log("--- Dane użytkownika ---");
        console.log(`Imię: ${this.name}`);
        console.log(`Nazwisko: ${this.surname}`);
        console.log(`Email: ${this.email}`);
        console.log(`WWW: ${this.www}`);
        console.log(`Typ: ${this.userType}`);
        console.log(`Aktywny: ${this.isActive}`);
    },

    // Metoda zmieniająca status aktywności
    setActive(active) {
        // Zabezpieczenie: sprawdzamy, czy przekazano wartość boolean
        if (typeof active === "boolean") {
            this.isActive = active;
        } else {
            console.log("Błąd: Wartość musi być true lub false.");
        }
    }
};

// Testowanie obiektu:
// currentUser.show();
// currentUser.setActive(false);
// currentUser.show();