let NomeHeroi = "Devneitor"
let XPacumulada = 10050

if (XPacumulada < 1000) {
    console.log(NomeHeroi + " Seu nivel de heroi é Ferro")
}  
else if (XPacumulada >= 1001 && XPacumulada <= 2000) {
    console.log (NomeHeroi + " Seu nivel de heroi é Bronze")
}
else if (XPacumulada >= 2001 && XPacumulada <= 5001) {
    console.log (NomeHeroi + " Seu nivel de heroi é Prata")
}
else if (XPacumulada >= 5001 && XPacumulada <= 7000) {
    console.log (NomeHeroi + " Seu nivel de heroi é Ouro")
}
else if (XPacumulada >= 7001 && XPacumulada <= 8000) {
    console.log (NomeHeroi + " Seu nivel de heroi é Platina")
}
else if (XPacumulada >= 8001 && XPacumulada <= 9000) {
    console.log (NomeHeroi + " Seu nivel de heroi é Ascendente")
}
else if (XPacumulada >= 9001 && XPacumulada <= 10000) {
    console.log (NomeHeroi + " Seu nivel de heroi é Imortal")
}
else  {
    console.log (NomeHeroi + " Seu nivel de heroi é Radiante")
}