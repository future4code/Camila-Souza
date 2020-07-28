//Exercícios de interpretação de código
/*
1.
a. false
b. false
c. true
e. boolean 

2.
a. undefined
b. null
c. 11
d. 0
e. 18
f. 25
*/

//Exercícios de escrita de código
//1.
const idadeSelf = 40
const idadeFriend = 38

const idadeMaior = idadeSelf > idadeFriend
const idadeDif = idadeSelf - idadeFriend
console.log (idadeMaior)
console.log (idadeDif)
//2.
const numeroPar = [12, 16, 222, 1054, 89752, 13]
const restoDiv0 = numeroPar[0]%2
const restoDiv1 = numeroPar[1]%2
const restoDiv2 = numeroPar[2]%2
const restoDiv3 = numeroPar[3]%2
const restoDiv4 = numeroPar[4]%2
const restoDiv5 = numeroPar[5]%2
console.log (restoDiv0)
console.log (restoDiv1)
console.log (restoDiv2)
console.log (restoDiv3)
console.log (restoDiv4)
//Como a divisão é de um número inteiro par por 2, o resto sempre será 0.
console.log (restoDiv5)
//A divisão de qualquer número inteiro ímpar por 2, sempre terá 1 como resto.
//3.
let listaDeTarefas = ["Exercícios", "Compras", "Dar banho no cachorro"]
console.log (listaDeTarefas)
const tarefasDone = listaDeTarefas.splice(2,1)
console.log (tarefasDone)
console.log (listaDeTarefas) - (tarefasDone)
//4.
const userName = "Úrsula"
const userMail = "ursula@gmail.com"

console.log ("O e-mail" + " " + userMail + " " + "foi cadastrado com sucesso. Seja bem-vinda(o)," + " " + userName + "!")

//Desafios Extras

//1.
const f77 = 77
const c80 = 80
const c30 = 30
const userC = 27

const kelvinF = (f77 - 32)* 5/9 + 273.15
const fahrenheitC80 = (c80 * 1.8) + 32
const fahrenheitC30 = (c30 * 1.8) + 32
const kelvinC = c30 + 273.15
const userF = (userC * 1.8) + 32
const userK = userC + 273.15

console.log (kelvinF + " " + "K")
console.log (fahrenheitC80 + " " + "ºF")
console.log (fahrenheitC30 + " " + "ºF") 
console.log (kelvinC + " " + "K")
console.log (userF + " " + "ºF")
console.log (userK + " " + "K")

//2.
const qwHoraCusto = 0.05
const residenciaCusto = 280 * qwHoraCusto
const desconto = residenciaCusto * 0.85

console.log ("R$" + residenciaCusto)
console.log ("R$" + desconto)

//3.
//a.
const libraValor = 20
const libraKg = libraValor / 2.205

console.log (libraValor + "lb equivalem a" + " " + libraKg + "kg")
//b.
const oncaValor = 10.5
const oncaKg = oncaValor / 35.274

console.log (oncaValor + "oz equivalem a" + " " + oncaKg + "kg")
//c.
const milhaValor = 100
const milhaM = milhaValor * 1609

console.log (milhaValor + "mi equivalem a" + " " + milhaM + "m")
//d.
const ftValor = 50
const ftM = ftValor / 3.281

console.log (ftValor + "ft equivalem a" + " " + ftM + "m")
//e.
const galaoValor = 103.56
const galaoL = galaoValor * 4.546

console.log (galaoValor + "gal equivalem a" + " " + galaoL + "l")
//f.
const xicaraValor = 450
const xicaraL = xicaraValor * 0.24

console.log (xicaraValor + " " + "xic equivalem a" + " " + xicaraL + "l")
//g.
const xicaraUserValor = 3
const xicaraUserL = xicaraUserValor * 0.24

console.log ("A medida solicitada é de" + " " + xicaraUserValor + " " + "xic, que equivalem a" + " " + xicaraUserL + "l")

