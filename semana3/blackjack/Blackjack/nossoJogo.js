/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo(a) ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
   const cartaU1 = comprarCarta()
   const cartaU2 = comprarCarta()
   const cartaC1 = comprarCarta()
   const cartaC2 = comprarCarta()
   console.log("Usuário - cartas: "+ cartaU1.texto + " " + cartaU2.texto + " - pontuação " + (cartaU1.valor + cartaU2.valor))
   console.log("Computador - cartas: " + cartaC1.texto + " " + cartaC2.texto + " - pontuação " + (cartaC1.valor + cartaC2.valor))
   if ((cartaU1.valor + cartaU2.valor) === (cartaC1.valor + cartaC2.valor)) {
      console.log ("Empate!")
  } else if ((cartaU1.valor + cartaU2.valor)> (cartaC1.valor + cartaC2.valor)) {
      console.log ("O usuário ganhou!")
  } else if ((cartaU1.valor + cartaU2.valor)< (cartaC1.valor + cartaC2.valor)) {
      console.log ("O computador ganhou!")
  }
} 
else {
    console.log("O jogo acabou")
 }
