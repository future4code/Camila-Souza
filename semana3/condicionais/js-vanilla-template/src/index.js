/*
Exercícios de interpretação de códigos
Exercício 1
    Explique o que o código faz. 
        Ele imprime uma mensagem positiva ou negativa quanto ao resultado de um teste, variando de acordo com a resposta do usuário.
    Qual o teste que ele realiza? 
        Se o número digitado pelo usuário possui o resto 0 ao ser dividido por 2, ou seja, é um número par.
    Para que tipos de números ele imprime no console "Passou no teste"? 
        Números pares
    Para que tipos de números a mensagem é "Não passou no teste"? 
        Números ímpares.
Exercício 2
    a. Para que serve o código acima?
        Para imprimir o preço da fruta escolhida pelo usuário no prompt.
    b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
        O preço da fruta Maçã é R$ 2.25
    c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
        O preço da fruta Pêra é R$ 5.5
        O preço da fruta é R$ 5
Exercício 3
    a. O que a primeira linha está fazendo?
        Descreve uma const identificada como "numero" e diz que o seu valor será um número digitado pelo usuário no prompt.
    b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
        Para o número 10: Esse número passou no teste
        Para o númro -10: Essa mensagem é secreta!!!
    c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
        Acredito que haja um erro, pois o "console.log(mensagem)" está fora do bloco if, mas solicitando uma informação do seu escopo.
*/

//Exercícios de escrita de código

//Exercício 4
/*
const idadeUsuario = Number(prompt("Qual é a sua idade?"))
    if (idadeUsuario >= 18){
    console.log ("Você pode dirigir")
}   else if (idadeUsuario < 18){
    console.log ("Você não pode dirigir")
}   else {
    console.log ("Idade não identificada")
}
*/
//Exercício 5
/*
const alunoTurno = String(prompt("Em qual turno você estuda? Responda M para matutino, V para vespertino ou N para noite."))
   
    if (alunoTurno === "M") {
        console.log ("Bom Dia!")
    } else if (alunoTurno === "V") {
        console.log ("Boa Tarde!")
    } else if (alunoTurno === "N") {
        console.log ("Boa Noite!")
    } else {
        console.log ("Turno não identificado")
    }
    
   //Exercício 6

   switch (alunoTurno) {
        case "M":
            console.log ("Bom Dia!")
            break
        case "V":
            console.log ("Boa Tarde!")
            break
        case "N":
            console.log ("Boa Noite!")
            break
        default:
            console.log ("Turno não identificado")
            break
   }
   */
  //Exercício 7
  /*
  const filmeGenero = prompt ("Qual o gênero do filme?")
  const filmePreco = Number (prompt ("Qual o valor do ingresso? Utilize apenas os numerais."))

  if (filmeGenero !== "fantasia") {
    console.log ("Escolha outro filme :(")
  } else if (filmePreco >= 15) {
    console.log ("Escolha outro filme :(")
  } else {
      console.log ("Bom filme!")
  }
  */
  //Desafio 1
  /*
  const filmeGenero = prompt ("Qual o gênero do filme?")
  const filmePreco = Number (prompt ("Qual o valor do ingresso? Utilize apenas os numerais."))
  const snack = prompt ("Qual snack você irá comprar?")

  if (filmeGenero !== "fantasia") {
    console.log ("Escolha outro filme :(")
  } else if (filmePreco >= 15) {
    console.log ("Escolha outro filme :(")
  } else {
      console.log ("Bom filme!")
      console.log ("... com" + " " + snack)
  }
  */
 //Desafio 2

 const nomeTorcedor = prompt ("Qual é o seu nome?")
 const jogoTipo = prompt ("Você quer assistir um jogo internacional ou nacional? Responda utilizando IN ou DO")
 const jogoEtapa = prompt ("Você quer assistir a decisão do terceiro lugar, a semi-final ou a final? Responda utilizando DT, SF ou FI")
 const categoria = Number (prompt ("Qual categoria deseja assistir? 1, 2, 3 ou 4?"))
 const ingressosQuant = Number (prompt ("Quantos ingressos você deseja comprar?"))

 console.log ("---Dados da compra---")
 console.log ("Nome do cliente: " + nomeTorcedor)
 switch (jogoTipo) {
    case "IN":
        console.log ("Tipo de jogo: Internacional")
    break
    case "DO":
        console.log ("Tipo de jogo: Doméstico/Nacional")
    break
    default:
        console.log ("Tipo de jogo não especificado")
    break
 }
 switch (jogoEtapa) {
    case "DT":
        console.log ("Etapa do jogo: Decisão do terceiro lugar")
    break
    case "SF":
        console.log ("Etapa do jogo: Decisão da semi-final")
    break
    case "FI":
        console.log ("Etapa do jogo: Decisão da final")
    break
    default:
        console.log ("Etapa do jogo não especificada")
    break
 }
 console.log ("Categoria: "+ categoria)
 console.log ("Quantidade de Ingressos: " + ingressosQuant + " ingressos")
 console.log ("---Valores---")
 
 const valorDOSF1 = 1320
 const valorDOSF2 = 880
 const valorDOSF3 = 550
 const valorDOSF4 = 220
 const valorDODT1 = 660
 const valorDODT2 = 440
 const valorDODT3 = 330
 const valorDODT4 = 170
 const valorDOFI1 = 1980
 const valorDOFI2 = 1320
 const valorDOFI3 = 880
 const valorDOFI4 = 330
 const realDolar = 4.1

 if (jogoTipo === "DO" && jogoEtapa === "DT" && categoria === 1) {
     console.log ("Valor do ingresso: R$ " + valorDODT1 + ",00")
 } else if (jogoTipo === "DO" && jogoEtapa === "DT" && categoria === 2) {
    console.log ("Valor do ingresso: R$ " + valorDODT2 + ",00")
 } else if (jogoTipo === "DO" && jogoEtapa === "DT" && categoria === 3) {
    console.log ("Valor do ingresso: R$ " + valorDODT3 + ",00")
 } else if (jogoTipo === "DO" && jogoEtapa === "DT" && categoria === 4) {
    console.log ("Valor do ingresso: R$ " + valorDODT4 + ",00")
 } else if (jogoTipo === "DO" && jogoEtapa === "SF" && categoria === 1) {
    console.log ("Valor do ingresso: R$ " + valorDOSF1 + ",00")
 } else if (jogoTipo === "DO" && jogoEtapa === "SF" && categoria === 2) {
    console.log ("Valor do ingresso: R$ " + valorDOSF2 + ",00")
 } else if (jogoTipo === "DO" && jogoEtapa === "SF" && categoria === 3) {
    console.log ("Valor do ingresso: R$ " + valorDOSF3 + ",00")
 } else if (jogoTipo === "DO" && jogoEtapa === "SF" && categoria === 4) {
    console.log ("Valor do ingresso: R$ " + valorDOSF4 + ",00")
 } else if (jogoTipo === "DO" && jogoEtapa === "FI" && categoria === 1) {
    console.log ("Valor do ingresso: R$ " + valorDOFI1 + ",00")
 } else if (jogoTipo === "DO" && jogoEtapa === "FI" && categoria === 2) {
    console.log ("Valor do ingresso: R$ " + valorDOFI2 + ",00")
 } else if (jogoTipo === "DO" && jogoEtapa === "FI" && categoria === 3) {
    console.log ("Valor do ingresso: R$ " + valorDOFI3 + ",00")
 } else if (jogoTipo === "DO" && jogoEtapa === "FI" && categoria === 4) {
    console.log ("Valor do ingresso: R$ " + valorDOFI4 + ",00")
 } else if (jogoTipo === "IN" && jogoEtapa === "DT" && categoria === 1) {
    console.log ("Valor do ingresso: R$ " + valorDODT1 + ",00")
} else if (jogoTipo === "IN" && jogoEtapa === "DT" && categoria === 2) {
   console.log ("Valor do ingresso: U$ " + valorDODT2 / realDolar)
} else if (jogoTipo === "IN" && jogoEtapa === "DT" && categoria === 3) {
   console.log ("Valor do ingresso: U$ " + valorDODT3 / realDolar)
} else if (jogoTipo === "IN" && jogoEtapa === "DT" && categoria === 4) {
   console.log ("Valor do ingresso: U$ " + valorDODT4 / realDolar)
} else if (jogoTipo === "IN" && jogoEtapa === "SF" && categoria === 1) {
   console.log ("Valor do ingresso: U$ " + valorDOSF1 / realDolar)
} else if (jogoTipo === "IN" && jogoEtapa === "SF" && categoria === 2) {
   console.log ("Valor do ingresso: U$ " + valorDOSF2 / realDolar)
} else if (jogoTipo === "IN" && jogoEtapa === "SF" && categoria === 3) {
   console.log ("Valor do ingresso: U$ " + valorDOSF3 / realDolar)
} else if (jogoTipo === "IN" && jogoEtapa === "SF" && categoria === 4) {
   console.log ("Valor do ingresso: U$ " + valorDOSF4 / realDolar)
} else if (jogoTipo === "IN" && jogoEtapa === "FI" && categoria === 1) {
   console.log ("Valor do ingresso: U$ " + valorDOFI1 / realDolar)
} else if (jogoTipo === "IN" && jogoEtapa === "FI" && categoria === 2) {
   console.log ("Valor do ingresso: U$ " + valorDOFI2 / realDolar)
} else if (jogoTipo === "IN" && jogoEtapa === "FI" && categoria === 3) {
   console.log ("Valor do ingresso: U$ " + valorDOFI3 / realDolar)
} else if (jogoTipo === "IN" && jogoEtapa === "FI" && categoria === 4) {
   console.log ("Valor do ingresso: U$ " + valorDOFI4 / realDolar)
} else {
    console.log ("Tivemos um problema com o seu pedido. Por favor, revise-o")
}

if (jogoTipo === "DO" && jogoEtapa === "DT" && categoria === 1) {
    console.log ("Valor total: R$ " + valorDODT1 + ",00")
} else if (jogoTipo === "DO" && jogoEtapa === "DT" && categoria === 2) {
   console.log ("Valor total: R$ " + valorDODT2 * ingressosQuant + ",00")
} else if (jogoTipo === "DO" && jogoEtapa === "DT" && categoria === 3) {
   console.log ("Valor total: R$ " + valorDODT3 * ingressosQuant + ",00")
} else if (jogoTipo === "DO" && jogoEtapa === "DT" && categoria === 4) {
   console.log ("Valor total: R$ " + valorDODT4 * ingressosQuant + ",00")
} else if (jogoTipo === "DO" && jogoEtapa === "SF" && categoria === 1) {
   console.log ("Valor total: R$ " + valorDOSF1 * ingressosQuant + ",00")
} else if (jogoTipo === "DO" && jogoEtapa === "SF" && categoria === 2) {
   console.log ("Valor total: R$ " + valorDOSF2 * ingressosQuant + ",00")
} else if (jogoTipo === "DO" && jogoEtapa === "SF" && categoria === 3) {
   console.log ("Valor total: R$ " + valorDOSF3 * ingressosQuant + ",00")
} else if (jogoTipo === "DO" && jogoEtapa === "SF" && categoria === 4) {
   console.log ("Valor total: R$ " + valorDOSF4 * ingressosQuant + ",00")
} else if (jogoTipo === "DO" && jogoEtapa === "FI" && categoria === 1) {
   console.log ("Valor total: R$ " + valorDOFI1 * ingressosQuant + ",00")
} else if (jogoTipo === "DO" && jogoEtapa === "FI" && categoria === 2) {
   console.log ("Valor total: R$ " + valorDOFI2 * ingressosQuant + ",00")
} else if (jogoTipo === "DO" && jogoEtapa === "FI" && categoria === 3) {
   console.log ("Valor total: R$ " + valorDOFI3 * ingressosQuant + ",00")
} else if (jogoTipo === "DO" && jogoEtapa === "FI" && categoria === 4) {
   console.log ("Valor total: R$ " + valorDOFI4 * ingressosQuant + ",00")
} else if (jogoTipo === "IN" && jogoEtapa === "DT" && categoria === 1) {
   console.log ("Valor total: R$ " + valorDODT1 * ingressosQuant + ",00")
} else if (jogoTipo === "IN" && jogoEtapa === "DT" && categoria === 2) {
  console.log ("Valor total: U$ " + valorDODT2 * ingressosQuant / realDolar)
} else if (jogoTipo === "IN" && jogoEtapa === "DT" && categoria === 3) {
  console.log ("Valor total: U$ " + valorDODT3 * ingressosQuant / realDolar)
} else if (jogoTipo === "IN" && jogoEtapa === "DT" && categoria === 4) {
  console.log ("Valor total: U$ " + valorDODT4 * ingressosQuant / realDolar)
} else if (jogoTipo === "IN" && jogoEtapa === "SF" && categoria === 1) {
  console.log ("Valor total: U$ " + valorDOSF1 * ingressosQuant / realDolar)
} else if (jogoTipo === "IN" && jogoEtapa === "SF" && categoria === 2) {
  console.log ("Valor total: U$ " + valorDOSF2 * ingressosQuant / realDolar)
} else if (jogoTipo === "IN" && jogoEtapa === "SF" && categoria === 3) {
  console.log ("Valor total: U$ " + valorDOSF3 * ingressosQuant / realDolar)
} else if (jogoTipo === "IN" && jogoEtapa === "SF" && categoria === 4) {
  console.log ("Valor total: U$ " + valorDOSF4 * ingressosQuant / realDolar)
} else if (jogoTipo === "IN" && jogoEtapa === "FI" && categoria === 1) {
  console.log ("Valor total: U$ " + valorDOFI1 * ingressosQuant / realDolar)
} else if (jogoTipo === "IN" && jogoEtapa === "FI" && categoria === 2) {
  console.log ("Valor total: U$ " + valorDOFI2 * ingressosQuant / realDolar)
} else if (jogoTipo === "IN" && jogoEtapa === "FI" && categoria === 3) {
  console.log ("Valor total: U$ " + valorDOFI3 * ingressosQuant / realDolar)
} else if (jogoTipo === "IN" && jogoEtapa === "FI" && categoria === 4) {
  console.log ("Valor total: U$ " + valorDOFI4 * ingressosQuant / realDolar)
} else {
   console.log ("Tivemos um problema com o seu pedido. Por favor, revise-o")
}



 /* 
 Valores - Tentativa 1 - fail

 switch (jogoTipo) {
    case "DO":
        switch (jogoEtapa) {
            case "DT":
                switch (categoria) {
                    case "1":
                    console.log ("Valor do ingresso: R$ " + valorDODT1 + ",00")
                    break
                    case "2":
                    console.log ("Valor do ingresso: R$ " + valorDODT2 + ",00")
                    break
                    case "3":
                    console.log ("Valor do ingresso: R$ " + valorDODT3 + ",00") 
                    break
                    case "4":
                    console.log ("Valor do ingresso: R$ " + valorDODT4 + ",00")
                    break
                }
            break
            case "SF":
                switch (categoria) {
                    case "1":
                    console.log ("Valor do ingresso: R$ " + valorDOSF1 + ",00")
                    break
                    case "2":
                    console.log ("Valor do ingresso: R$ " + valorDOSF2 + ",00")
                    break
                    case "3":
                    console.log ("Valor do ingresso: R$ " + valorDOSF3 + ",00") 
                    break
                    case "4":
                    console.log ("Valor do ingresso: R$ " + valorDOSF4 + ",00")
                    break
                }
            break
            case "FI": 
                switch (categoria) {
                case "1":
                console.log ("Valor do ingresso: R$ " + valorDOFI1 + ",00")
                break
                case "2":
                console.log ("Valor do ingresso: R$ " + valorDOFI2 + ",00")
                break
                case "3":
                console.log ("Valor do ingresso: R$ " + valorDOFI3 + ",00") 
                break
                case "4":
                console.log ("Valor do ingresso: R$ " + valorDOFI4 + ",00")
                break
            }
        break
        }
    break
    case "IN":
        switch (jogoEtapa) {
            case "DT":
                switch (categoria) {
                    case "1":
                    console.log ("Valor do ingresso: $ " + valorDODT1*realDolar + ",00")
                    break
                    case "2":
                    console.log ("Valor do ingresso: $ " + valorDODT2*realDolar + ",00")
                    break
                    case "3":
                    console.log ("Valor do ingresso: $ " + valorDODT3*realDolar + ",00") 
                    break
                    case "4":
                    console.log ("Valor do ingresso: $ " + valorDODT4*realDolar + ",00")
                    break
                }
            break
            case "SF":
                switch (categoria) {
                    case "1":
                    console.log ("Valor do ingresso: $ " + valorDOSF1*realDolar + ",00")
                    break
                    case "2":
                    console.log ("Valor do ingresso: $ " + valorDOSF2*realDolar + ",00")
                    break
                    case "3":
                    console.log ("Valor do ingresso: $ " + valorDOSF3*realDolar + ",00") 
                    break
                    case "4":
                    console.log ("Valor do ingresso: $ " + valorDOSF4*realDolar + ",00")
                    break
                }
            break
            case "FI": 
                switch (categoria) {
                case "1":
                console.log ("Valor do ingresso: $ " + valorDOFI1*realDolar + ",00")
                break
                case "2":
                console.log ("Valor do ingresso: $ " + valorDOFI2*realDolar + ",00")
                break
                case "3":
                console.log ("Valor do ingresso: $ " + valorDOFI3*realDolar + ",00") 
                break
                case "4":
                console.log ("Valor do ingresso: $ " + valorDOFI4*realDolar + ",00")
                break
            }
        break
        }
    break
    default:    
        console.log ("Tivemos um problema com o seu pedido. Por favor, revise-o")
    break
 }

*/


