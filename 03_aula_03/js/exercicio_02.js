// let selectTemp = document.getElementById('selectTemp').value
/*let teste = selectTemp.value
console.log(teste);*/
divC.style.display = 'none'

const hideInputs = () => {
    let selected = selectTemp.value
    console.log(selected);

    if(selected === 'c'){
        divC.style.display = 'none'
        divF.style.display = 'block'
    } else if (selected === 'f'){
        divF.style.display = 'none'
        divC.style.display = 'block'
    }
}

const toC = () => {
    event.preventDefault()
    console.log('para celsius');
    let tempFahrenheit = fahrenheit.value

    let conversao = (tempFahrenheit - 32) * 1.8

    resultado.innerHTML = conversao
}

const toF = () => {
    event.preventDefault()
    console.log('para fahrenheit');
    let tempCelsius = celsius.value

    let conversao = (tempCelsius * 1.8) + 32
    console.log(resultado);


    resultado.innerHTML = conversao
}