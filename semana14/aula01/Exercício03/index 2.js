// Exercício 3
const userTask = process.argv[2];
const tasks = ["Dar banho no cachorro", "Comprar a comida do gato", "Fazer os exercícios do dia"];

const addTask = (newTask)=>{
    tasks.push(newTask);

    console.log("Tarefa adicionada com sucesso! Tarefas: "+tasks)
}
addTask(userTask);