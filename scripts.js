const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    const dolarToday = 5.2
    const euroToday = 6.2


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.querySelector('.currency-converted')
    const currencyImage = document.querySelector('.currency-img-converted')

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = '(US$) Dólar'
        currencyImage.src = './assets/dolar.png'
    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = '(€) Euro'
        currencyImage.src = './assets/euro.png'
    }

    convertValues()
}

currencySelect.addEventListener('change', changeCurrency)

convertButton.addEventListener('click', convertValues)

// const InputCurrencyValueFix = new Intl.NumberFormat("pt-BR", {
//     style: "currency",
//     currency: "BRL"
// }).format(inputCurrencyValue);
// document.querySelector(".input-currency").value = InputCurrencyValueFix;

