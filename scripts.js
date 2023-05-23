const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    const dolarToday = 4.97
    const euroToday = 5.36
    const libraToday = 6.17
    const btcToday = 135.24

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


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

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "btc") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",            
        }).format(inputCurrencyValue / btcToday)
    }
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
    if (currencySelect.value == 'libra') {
        currencyName.innerHTML = '(£) Libra'
        currencyImage.src = './assets/libra.png'
    }
    if (currencySelect.value == 'btc') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = './assets/bitcoin.png'
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

