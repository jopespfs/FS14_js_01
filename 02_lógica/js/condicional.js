/* let numero = 10

if(numero < 10) {
    console.log( 'é menor que dez')
} else if (numero>10){
    console.log ('é maior que 10')
} else {
    console.log('é o mesmo número')
} */

const comparacao10 = (numero) => {
    if(numero < 10) {
        console.log( 'é menor que dez')
    } else if (numero>10){
        console.log ('é maior que 10')
    } else {
        console.log('é o mesmo número')
    }
}

comparacao10 (2)
comparacao10 (10)
comparacao10 (24)



const compare1= (n1, n2) => {
    if ( n1 > n2) {
        console.log('o primeiro numero é maior que o segundo numero')
    } else if ( n1 < n2) {
        console.log('o primeiro numero é menor que o segundo numero')
    } else {
        console.log('o primeiro numero é igual ao segundo numero')
    }
}  
compare1 (20, 30)