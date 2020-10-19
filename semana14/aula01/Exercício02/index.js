// Exercício 2
const number1 = Number(process.argv[3]);
const number2 = Number(process.argv[4]);
const calc = process.argv[2];
if(isNaN(number1) || isNaN(number2)) {
    console.log('\x1b[47m%s\x1b[31m', "Esperava 3 parâmetros, a operação e 2 números. Por favor, verifique-os e tente novamente.")
} else {
    switch(calc){
        case "add":
            const add = number1 + number2;
            console.log('\x1b[41m%s\x1b[45m', "Resposta: "+add);
            break;
        case "sub":
            const sub = number1 - number2;
            console.log('\x1b[41m%s\x1b[45m', "Resposta: "+sub);
            break;
        case "mult":
            const mult = number1 * number2;
            console.log('\x1b[41m%s\x1b[45m', "Resposta: "+mult);
            break;
        case "div":
            const div = number1 / number2;
            console.log('\x1b[41m%s\x1b[45m', "Resposta: "+div)
            break    
    }
}