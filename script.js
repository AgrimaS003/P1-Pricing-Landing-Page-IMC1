function showBookName(novelId) {
    var bookName = document.getElementById(`bookName${novelId}`);
    bookName.classList.remove("hidden");
}

function hideBookName(novelId) {
    var bookName = document.getElementById(`bookName${novelId}`);
    bookName.classList.add("hidden");
}

function toggleDescription(novelId) {
    var description = document.getElementById(`description${novelId}`);
    description.classList.toggle("hidden");
}

// Function to change currency
function changeCurrency(novelId, newCurrency) {
    var currencyElement = document.getElementById(`currency${novelId}`);
    currencyElement.textContent = newCurrency;
}
