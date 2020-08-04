/*
Exercício de interpretação de cógigo

Exercício 1
    a.  10
        50
    b.  Nada apareceria no console

Exercício 2
    a.  Darvas
        Goli
    b.  undefined

Exercício 3
    arrayFinal - insere o quadrado de um número par do array
    Novo nome: arrayAoQuadrado
*/

//Exercícios de escrita de código

//Exercício 4
//a.
// function arrayDeDados(arrayDeInfo) {
//     for (let info of arrayDeInfo) {
//         console.log(info)
//     }
// }
// let subject = ["Eu sou Camila, tenho 40 anos, moro em Fortaleza/Pindoretama e sou estudante."]
// const resultado = arrayDeDados(subject)
//b. Agora funcionou!!! Graças à ajuda do Raphael!
// function arrayDeDados(arrayDeInfo) {
//             console.log("Eu sou " + arrayDeInfo[0] + ", tenho " + arrayDeInfo[1] + " anos, moro em " + arrayDeInfo[2] + " e " + arrayDeInfo[3])
           
// }
// let subject = []
// subject.push(prompt("Qual é o seu nome?"))
// subject.push(Number(prompt("Qual é a sua idade?")))
// subject.push(prompt("Em que cidade você vive?"))
// if(confirm("Você estuda? Se sim, clique em OK, se não, clique em CANCEL")) {
//     subject.push("sou estudante.")
// } else {
//     subject.push("não sou estudante.")
// }
// let resultado = arrayDeDados(subject)

//Exercício 5
//a.
// function somaDoisNumeros(numeros){
//     let soma = numeros[0] + numeros[1]
//         console.log(soma)
// }
// let numerosUsuario = []
// numerosUsuario.push(Number(prompt("Escreva um número")))
// numerosUsuario.push(Number(prompt("Escreva outro número")))
// let resultado = somaDoisNumeros(numerosUsuario)
// b.
// function maiorOuIgual(numeros) {
//     if(numeros[0]>numeros[1]) {
//         console.log("O número " + numeros[0] + " é maior que o número " + numeros[1])
//     } else if (numeros[0]===numeros[1]) {
//         console.log("O número " + numeros[0] + " é igual ao número " + numeros[1])
//     } else if (numeros[0]<numeros[1]) {
//         console.log("O número " + numeros[0] + " é menor que o número " + numeros[1])
//     } else {
//         console.log("Número não reconhecido")
//     }
// }
// let numerosUsuario = []
// numerosUsuario.push(Number(prompt("Escreva um número")))
// numerosUsuario.push(Number(prompt("Escreva outro número")))
// let resultado = maiorOuIgual(numerosUsuario)
//c.
// function repeticao(palavra) {
//     for(let i = 0; i < 9+1; i++)
//     console.log(palavra)
// }
// let palavraDoUsuario = []
// palavraDoUsuario.push(String(prompt("Escreva algo para ser repetido 10 vezes")))
// let resultado = repeticao(palavraDoUsuario)

//Exercícios 6
//a.
// function quatidadeElementos(quantos) {
//     console.log(quantos.length)
// }
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// const resultado = quatidadeElementos(array)
//b.
// function pares(num) {
//         if (num % 2 === 0) {
//             console.log("O número é par")
//         } else if (num % 2 === 1) {
//             console.log("O número não é par")
//     }   else {
//         console.log("Número não reconehcido")
//     }
// }
// let numeroUsuario = Number(prompt("Escreva um número e verifique se ele é par"))
// let resultado = pares(numeroUsuario)
//c.
// function pares(num) {
//     let even = []
//     for (i = 0; i < num.length; i++){
//         if(num[i] % 2 === 0){
//         even.push(num[i])
//         }
//     }
//     console.log(even.length)
// }
//     const array = [10, 23, 45, 78, 90,52, 35, 67, 84, 22]
//     let resultado = pares(array)
    //d.
    // function pares(num) {
    //     for (i = 0; i < num.length; i++){
    //         if(num[i] % 2 === 0){
    //             console.log("O número " + num[i] + " é par")
    //             }
    //         else {
    //             console.log("o número " + num[i] + " não é par")   
    //     }
    //     }
    // }
    // const array = [10, 23, 45, 78, 90,52, 35, 67, 84, 22]
    // let resultado = pares(array)