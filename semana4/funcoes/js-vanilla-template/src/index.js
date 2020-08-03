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
//b.
function arrayDeDados(arrayDeInfo) {
        for (let info of arrayDeInfo) {
            console.log("Eu sou " + info[0] + ", tenho " + info[1] + " anos, moro em " + info[2] + " e " + info[3] + " estudante")
        }
}
let subject[]
subject.push = prompt("Qual é o seu nome?")
subject.push = Number(prompt("Qual é a sua idade?"))
subject.push = prompt("Em que cidade você vive?")
subject.push = prompt("Você estuda? Se sim, escreva 'sou estudante', se não, escreva 'não sou estudante'")
const frase = arrayDeDados(subject)

// console.log(infoUsuario)

