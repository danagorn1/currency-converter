const convertButton = document.querySelector(".convert-button")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    const dolarToday = 4.97
    const euroToday = 5.36
    const libraToday = 6.17
    const btcToday = 135000.24



    if (currencySelectToConvert.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        
        if (currencySelect.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * 1)
        }

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

    if (currencySelectToConvert.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        if (currencySelect.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * dolarToday)           
        }
        if (currencySelect.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)
        }

        if (currencySelect.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * dolarToday / euroToday)
        }

        if (currencySelect.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * dolarToday / libraToday)
        }

        if (currencySelect.value == "btc") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC",
            }).format(inputCurrencyValue * dolarToday / btcToday)
        }
    }
    if (currencySelectToConvert.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        if (currencySelect.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * euroToday)           
        }
        if (currencySelect.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * euroToday / dolarToday)
        }

        if (currencySelect.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)
        }

        if (currencySelect.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * euroToday / libraToday)
        }

        if (currencySelect.value == "btc") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC",
            }).format(inputCurrencyValue * euroToday / btcToday)
        }
    }

    if (currencySelectToConvert.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        if (currencySelect.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * libraToday)           
        }
        if (currencySelect.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * libraToday / dolarToday)
        }

        if (currencySelect.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * libraToday / euroToday)
        }

        if (currencySelect.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)
        }

        if (currencySelect.value == "btc") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC",
            }).format(inputCurrencyValue * libraToday / btcToday)
        }
    }

    if (currencySelectToConvert.value == "btc") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

        if (currencySelect.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * btcToday)           
        }
        if (currencySelect.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * btcToday/ dolarToday)
        }

        if (currencySelect.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * btcToday / euroToday)
        }

        if (currencySelect.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * btcToday / libraToday)
        }

        if (currencySelect.value == "btc") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC",
            }).format(inputCurrencyValue * 1)
        }
    }

}






    function changeCurrencyToConvert() {

        const currencyImageToConvert = document.querySelector('.currency-img-to-convert')
        const currencyNameToConvert = document.querySelector('.currency')
        
        if (currencySelectToConvert.value == 'real') {
            currencyNameToConvert.innerHTML = '(R$ Real'
            currencyImageToConvert.src = './assets/real.png'
        }

        if (currencySelectToConvert.value == 'dolar') {
            currencyNameToConvert.innerHTML = '(US$) Dólar'
            currencyImageToConvert.src = './assets/dolar.png'
        }

        if (currencySelectToConvert.value == 'euro') {
            currencyNameToConvert.innerHTML = '(€) Euro'
            currencyImageToConvert.src = './assets/euro.png'
        }

        if (currencySelectToConvert.value == 'libra') {
            currencyNameToConvert.innerHTML = '(£) Libra'
            currencyImageToConvert.src = './assets/libra.png'
        }

        if (currencySelectToConvert.value == 'btc') {
            currencyNameToConvert.innerHTML = '(₿) Bitcoin'
            currencyImageToConvert.src = './assets/bitcoin.png'
        }

        convertValues()
    }


    function changeCurrency() {

        const currencyImage = document.querySelector('.currency-img-converted')
        const currencyName = document.querySelector('.currency-converted')
        
        if (currencySelect.value == 'real') {
            currencyName.innerHTML = '(R$) Real'
            currencyImage.src = './assets/real.png'
        }

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
            currencyName.innerHTML = '(₿) Bitcoin'
            currencyImage.src = './assets/bitcoin.png'
        }

        convertValues()
    }

    currencySelectToConvert.addEventListener('change', changeCurrencyToConvert)

    currencySelect.addEventListener('change', changeCurrency)

    convertButton.addEventListener('click', convertValues)

// const InputCurrencyValueFix = new Intl.NumberFormat("pt-BR", {
//     style: "currency",
//     currency: "BRL"
// }).format(inputCurrencyValue);
// document.querySelector(".input-currency").value = InputCurrencyValueFix;

