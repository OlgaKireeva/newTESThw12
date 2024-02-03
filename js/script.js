"use strict";

document.getElementById("penaltiesBtn").addEventListener("click", function () {
    document.getElementById("penalties").style.display = "block";
    document.getElementById("payments").style.display = "none";
});

document.getElementById("paymentsBtn").addEventListener("click", function () {
    document.getElementById("penalties").style.display = "none";
    document.getElementById("payments").style.display = "block";
});

const showFinesButton = document.getElementById('penaltiesBtn');
const searchFinesButton = document.getElementById('searchBtn');

function populateFinesTable(fines) {
    const tableBody = document.getElementById('finesTableBody');
    let tableList = document.querySelectorAll("#finesTableBody>tr");

    if (document.querySelector("#finesTableBody>tr"))
        removeTable(tableList);

    fines.forEach(fine => {
        const row = document.createElement('tr');
        row.innerHTML = `
                <td>${fine.номер}</td>
                <td>${fine.тип}</td>
                <td>${fine.сума}</td>
                <td>${fine.дата}</td>
            `;
        tableBody.appendChild(row);
    });
}

function removeTable(list) {
    list.forEach(list => list.remove());
}

showFinesButton.addEventListener('click', () => {
    populateFinesTable(window.data.finesData);
});

searchFinesButton.addEventListener('click', () => {
    let number = document.getElementById("searchInput2").value;
    let fineType = document.getElementById("searchInput").value;
    let searchData = (number) ? number : fineType;
    populateFinesTable(window.fineList.searchFines(searchData));
});
