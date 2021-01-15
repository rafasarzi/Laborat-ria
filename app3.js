//Pergunta o nome e sobrenome
let name = prompt("Qual seu nome e sobre nome? ")
//Pega primeira letra do primeiro nome
let firstInitial = name.slice(0,1)
//Pega a posicao da primeira letra do segundo nome
let secondInitialPsition = name.indexOf(" ") + 1;
//pega inicial do segundo nome
let secondInitial = name.slice(secondInitialPsition, secondInitialPsition + 1)
//mostra na tela as iniciais
document.write("Suas iniciais são: " +firstInitial.toUpperCase()+secondInitial.toUpperCase())