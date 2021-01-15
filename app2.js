//perguntar as entradas
let income = prompt("Qual o valor de entrada?")
//saída
let costs = prompt("Qual o valor de saída?")
//porcentagem dos impostos
let taxPercent = prompt("Qual a porcentagem dos impostos?")
//renda bruta
let grossProft = income - costs
//valor dos impostos
let tax = grossProft * taxPercent/100
//renda liquida
let netIncome = grossProft - tax
//mostrar resultado
document.write(" Sua renda bruta é: " + grossProft + " Seus impostos são: " + tax + " Sua renda líquida é: " + netIncome)