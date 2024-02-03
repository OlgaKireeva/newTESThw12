"use strict";

window.fineList = {
    searchFines: searchFines
}

// Змінна, яка містить всі дані з файлу data.js
let DB = window.data.finesData;

function searchFines(searchKey, specificType) {
    if (searchKey === "Пошук за номером") {
        // Повертаємо всі дані, оскільки шукаємо за номером
        return DB;
    } else if (searchKey === "Пошук за типом штрафу") {
        // Повертаємо всі дані, оскільки шукаємо за типом штрафу
        return DB;
    } else if (searchKey === "Пошук за конкретним типом штрафу") {
        // Повертаємо дані, фільтровані за конкретним типом штрафу
        return DB.filter(fine => fine.тип === specificType);
    } else {
        console.error("Невірний ключ пошуку!");
        return [];
    }
}


