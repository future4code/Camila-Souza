// Exercício 1
// a) process.argv[]
const name = process.argv[2];
const age = Number(process.argv[3]);
const futureAge = age + 7;
// // b)
// if(name==="" || isNaN(age)) {
//     console.log('\x1b[47m%s\x1b[31m', "Esperava 2 parâmetros, um nome e um número. Por favor, verifique-os e tente novamente.")
// } else {
//    console.log('\x1b[41m%s\x1b[31m', "Olá, "+name+"! Você tem "+age+" anos.") 
// }

// c)
if(name==="" || isNaN(age)) {
    console.log('\x1b[47m%s\x1b[31m', "Esperava 2 parâmetros, um nome e um número. Por favor, verifique-os e tente novamente.")
} else {
console.log('\x1b[41m%s\x1b[45m', "Olá, "+name+"! Você tem "+age+" anos. Em sete anos você terá "+ futureAge+".")
}
