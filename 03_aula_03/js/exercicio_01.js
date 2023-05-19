const compara2numeros = (n1, n2) => {
    if(n1 < n2){
        console.log(`o numero ${n1} é menor que ${n2}`);
    } else if(n1 === n2){
        console.log(`o numero ${n1} é igual a ${n2}`);
    } else {
        console.log(`o numero ${n1} é maior que ${n2}`);
    }
} 
compara2numeros(20, 40)
compara2numeros(3, 23)
compara2numeros(2, 2)
compara2numeros(230, 34)
