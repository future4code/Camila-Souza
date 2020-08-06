// arrayDespesa

let arrayDespesas = []

function novaDespesaCadastro() {
    const despesas = {
        tipo: document.getElementById("tipoDespesaCadastro").value,
        valor: document.getElementById("valorDespesaCadastro").value,
        descricao: document.getElementById("descricaoDespesaCadastro").value
    }
        if (despesas.tipo === "" || despesas.valor === "" || despesas.descricao === ""){
        alert("Verifique se as informações foram inseridas corretamente")
    } else {
        const novaDespesa = {
        tipo: tipoDaDespesa,
        valor: valorDaDespesa,
        descricao: descricaoDaDespesa
    }

    arrayDespesas.push(novaDespesa)
        despesas.tipo.value = ""
        despesas.valor.value = ""
        despesas.descricao.value = ""

    console.log(arrayDespesas)
    
    }     
}

