/*
Exercícios de interpretação de código
    1.  a. Puxa o prompt com a pergunta para informar o valor da cotação do dólar
        b. Guarda o número em uma constante chamada cotacao.
            Obs.: Peguei a cotação do dólar no google e vou supor que a pessoa inseriu esse valor no prompt (5,43)
        c. Guarda a multiplicação do valor R$ valor em dolar, no caso, 100, com a cotação, 5,43
        d. Imprime no console:  R$543
    2.  Para a const novoMontante:
            a. Puxa o case Ações do switch(tipoDeInvestimento), onde multiplica o valor informado, 150, por 1.1
            b. Imprime no console 165
        Para a const segundoMontante:
            a. Puxa o case default do switch(tipoDeInvestimento)
            b. Imprime no console: "TIPO DE INVESTIMENTO INFORMADO INCORRETO!"
    3.  Para o console.log ("Quantidade total de números", numeros.length)
            a. Puxa a const numeros e verifica quantos elementos a array dele tem
            b. Imprime no console: 14
        Para o console.log (array1.length)
            a. Puxa a const numeros
            b. Verifica quais são os números pares e envia para a const array1
            c. Verifica o número de elementos do array da const array1
            d. Imprime no console: 6
        Para o console.log (array2.length)
            a. Puxa a const numeros
            b. Verifica quais são os números ímpares e envia para a const array2
            c. Verifica o número de elementos do array da const array2
            d. Imprime no console: 8
    4.  Para o console.log(numero1)
            a. Puxa a const numeros
            b. Verifica se os elementos no index são < do que o let numero1
            c. Caso seja <, considera o numero1 como número
            d. Imprime no console: Infinity
                Obs.: Suponho....
        Para o console.log(numero2)
            a. Puxa a const numeros
            b. Verifica se os elementos no index são < do que o let numero2(0)
            c. Caso seja <, considera o numero2 como número
            d. Caso seja >, considera o elemento do array como número
            e. Imprime no console (em linhas separadas): 25 25 55 64 121 121 121 121 121 121 121 121 121 283 283 283 283 283 283 283 283 283 283 283 1590
*/  
/*
Exercícios de Lógica de Programação
    1. 
    2.  a. true e false e false
                false
        b. (true e false) ou true
                false ou true
                    true
        c. (false ou true) e (false ou true)
                true e true
                    true
        d. !(false e true) ou !(true e true)
                true ou false
                    true
        e. (false e false) ou (true e true e true)
                false ou true
                    true
*/
//  3.  Não visualizo a resposta com o while, então faria com o for dessa forma:
        // const numerosPares = []
        // const numeroEscolhido = Number(prompt("Digite um número inteiro positivo"))
        // for (i=0; i<numeroEscolhido; i++) {
        //     numerosPares.push += i*2 + " "
        // }
        // console.log(numerosPares)
//  4.
        const triangulo = []
        const numero1 = Number(prompt("Digite a medida em centímetros do primeiro lado do seu triângulo"))
            triangulo.push(numero1)
        const numero2 = Number(prompt("Digite a medida em centímetros do segundo lado do seu triângulo"))
            triangulo.push(numero2)
        const numero3 = Number(prompt("Digite a medida em centímetros do terceiro lado do seu triângulo"))
            triangulo.push(numero3)
            console.log(triangulo)
        if (numero1===numero2 && numero2===numero3) {
            console.log("O seu triângulo é equilátero")
        } else if (numero1!==numero2 && numero2!==numero3 && numero1!==numero3) {
            console.log("O seu triângulo é escaleno")
        } else {
            console.log("O seu triângulo é isósceles")
        }