// // Exercício 1
// // a) process.argv[]
// const name = process.argv[2];
// const age = process.argv[3];
// const futureAge = Number(age) + 7;
// // b)
// console.log("Olá, "+name+"! Você tem "+age+" anos.")
// // c)
// console.log("Olá, "+name+"! Você tem "+age+" anos. Em sete anos você terá "+ futureAge+".")

// // Exercício 2
// const number1 = Number(process.argv[3]);
// const number2 = Number(process.argv[4]);
// const calc = process.argv[2];
// switch(calc){
//     case "add":
//         const add = number1 + number2;
//         console.log("Resposta: "+add);
//         break;
//     case "sub":
//         const sub = number1 - number2;
//         console.log("Resposta: "+sub);
//         break;
//     case "mult":
//         const mult = number1 * number2;
//         console.log("Resposta: "+mult);
//         break;
//     case "div":
//         const div = number1 / number2;
//         console.log("Resposta: "+div)
//         break    
// }
// // Exercício 3
// const userTask = process.argv[2];
// const tasks = ["Dar banho no cachorro", "Comprar a comida do gato", "Fazer os exercícios do dia"];

// const addTask = (newTask)=>{
//     tasks.push(newTask);

//     console.log("Tarefa adicionada com sucesso! Tarefas: "+tasks)
// }
// addTask(userTask);

