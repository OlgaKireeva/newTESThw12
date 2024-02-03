"use strict";

let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

buttonSubmit.addEventListener('click', payFine);

function payFine() {
    let enteredFineNumber = fineNumber.value;
    let enteredPassport = passport.value;
    let enteredCreditCardNumber = creditCardNumber.value;
    let enteredCvv = cvv.value;
    let enteredAmount = parseFloat(amount.value);

    let matchingFine = window.data.finesData.find(fine => fine.номер === enteredFineNumber);

    if (!matchingFine) {
        alert("Штраф з введеним номером не знайдений");
    } else if (matchingFine.сума !== enteredAmount) {
        alert("Сума штрафу не співпадає");
    } else if (!validatePassport(enteredPassport)) {
        alert("Невірний паспортний номер");
    } else if (!validateCreditCard(enteredCreditCardNumber)) {
        alert("Невірний номер кредитної карти");
    } else if (!validateCvv(enteredCvv)) {
        alert("Невірний CVV");
    } else {
        let index = window.data.finesData.indexOf(matchingFine);
        window.data.finesData.splice(index, 1);
        alert("Штраф успішно оплачено та видалено з бази даних");
    }
}

function validatePassport(passport) {
    return /^[а-яА-Я]{2}\d{6}$/.test(passport);
}

function validateCreditCard(creditCard) {
    return /^\d{16}$/.test(creditCard);
}

function validateCvv(cvv) {
    return /^\d{3}$/.test(cvv);
}
