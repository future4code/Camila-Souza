function addTask() {
    const userTask = document.getElementById("task")
    let toDo = userTask.value
    console.log(toDo)
    const day = document.getElementById("dias-semana")
    let byDay = day.value

    if (toDo==="") {
        alert("Digite uma tarefa")
    } else if (byDay==="segunda") {
        const sundayTask = document.getElementById("mon")
        sundayTask.innerHTML += `<li class="tasks">${toDo}</li>`
        userTask.value = ""
    } else if (byDay==="terca") {
        const sundayTask = document.getElementById("tue")
        sundayTask.innerHTML += `<li class="tasks">${toDo}</li>`
        userTask.value = ""
    } else if (byDay==="quarta") {
        const sundayTask = document.getElementById("wed")
        sundayTask.innerHTML += `<li class="tasks">${toDo}</li>`
        userTask.value = ""
    } else if (byDay==="quinta") {
        const sundayTask = document.getElementById("thu")
        sundayTask.innerHTML += `<li class="tasks">${toDo}</li>`
        userTask.value = ""
    } else if (byDay==="sexta") {
        const sundayTask = document.getElementById("fri")
        sundayTask.innerHTML += `<li class="tasks">${toDo}</li>`
        userTask.value = ""
    } else if (byDay==="sabado") {
        const sundayTask = document.getElementById("sat")
        sundayTask.innerHTML += `<li class="tasks">${toDo}</li>`
        userTask.value = ""
    } else if (byDay==="domingo") {
        const sundayTask = document.getElementById("sun")
        sundayTask.innerHTML += `<li class="tasks">${toDo}</li>`
        userTask.value = ""
    }


}

function deleteAll() {
    const blank = document.getElementsByClassName("tasks")
            blank.innerHTML = ""
        }
 
function done() {
    const line = document.getElementsByClassName("tasks")
        


}