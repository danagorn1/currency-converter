const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");


    const dolarToday = 5.2;
    const euroToday = 6.2;


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

        const currencyTypeConverted = document.querySelector('.currency-converted')
        currencyTypeConverted.innerHTML = '(US$) Dólar'

        const currencyImgConverted = document.querySelector(".currency-img-converted")
        currencyImgConverted.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);

        const currencyImgConverted = document.querySelector(".currency-img-converted")
        currencyImgConverted.src = "./assets/euro.png"

        const currencyTypeConverted = document.querySelector('.currency-converted')
        currencyTypeConverted.innerHTML = '(€) Euro'
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

    const InputCurrencyValueFix = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
    document.querySelector(".input-currency").value = InputCurrencyValueFix;

}

convertButton.addEventListener("click", convertValues);

