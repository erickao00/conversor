const convertButton = document.querySelector(".convert-button");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;

    const currencyValueToConvert = document.querySelector(".moeda-valor"); // valor em real
    const currencyValueConverted = document.querySelector(".moeda-valor-converter"); // valor convertido

    const dollarToday = 5.2;

    // Garantir que o valor é um número
    const convertedValue = Number(inputCurrencyValue) / dollarToday;

    currencyValueToConvert.innerHTML = `R$ ${Number(inputCurrencyValue).toFixed(2).replace(".", ",")}`;
    currencyValueConverted.innerHTML = `US$ ${convertedValue.toFixed(2).replace(".", ",")}`;

    console.log("Valor convertido:", convertedValue);
}

convertButton.addEventListener("click", convertValues);


