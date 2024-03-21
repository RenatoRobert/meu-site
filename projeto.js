const saudacao = prompt("Olá, qual seu nome?")
const esporte = prompt("Olá " + saudacao + "," + " você pratica algum esporte?")
const conhece = prompt(saudacao + "," + " você já conhece o Judô?\nSim)\nNão)")

switch (conhece) {
    case "Sim":
        alert("Ótimo " + saudacao + "," + " vai gostar da página")
        break
    case "Não":
        alert("Então hoje vai conhecer um pouco sobre esse esporte " + saudacao)    
        break
    default:
        alert("Opção inválida, digite Sim ou Não")    
}
