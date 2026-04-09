/*
document.getElementById("theme-toggle").addEventListener("click", function() {
            var element = document.body;
            element.classList.toggle("dark-mode");
        });
*/



document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const darkModeClass = 'dark-mode';
    const localStorageKey = 'theme'; // Schlüssel für Local Storage

    // 1. Beim Laden der Seite den gespeicherten Theme-Modus anwenden
    const savedTheme = localStorage.getItem(localStorageKey);
    if (savedTheme === darkModeClass) {
        body.classList.add(darkModeClass);
    } else {
        // Optional: Standardmäßig Light Mode, wenn nichts gespeichert ist oder 'light-mode'
        body.classList.remove(darkModeClass);
    }

    // 2. Event Listener für den Toggle-Button
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle(darkModeClass);

            // 3. Den aktuellen Theme-Modus im Local Storage speichern
            if (body.classList.contains(darkModeClass)) {
                localStorage.setItem(localStorageKey, darkModeClass);
            } else {
                localStorage.setItem(localStorageKey, 'light-mode'); // Oder remove item, je nach Logik
                // localStorage.removeItem(localStorageKey); // Entfernt den Eintrag komplett
            }
        });
    }
});
