let NomeHeroi = "Devneitor"
let XPacumulada = 50011

switch (true) {
    case (XPacumulada < 1000):
    console.log ("Herói " + NomeHeroi + " está no nível Ferro")
        break
    case (XPacumulada <= 2000):
        console.log ("Herói " + NomeHeroi + " está no nível Bronze")
        break
    case (XPacumulada <= 5000):
        console.log ("Herói " + NomeHeroi + " está no nível Prata")
        break
    case (XPacumulada <= 7000):
        console.log ("Herói " + NomeHeroi + " está no nível Ouro")
        break
    case (XPacumulada <= 8000):
        console.log ("Herói " + NomeHeroi + " está no nível Platina")
        break
    case (XPacumulada <= 9000):
        console.log ("Herói " + NomeHeroi + " está no nível Ascendente")
        break
    case (XPacumulada <= 10000):
        console.log ("Herói " + NomeHeroi + " está no nível Imortal")
        break 
    case (XPacumulada >= 10001):
        console.log ("Herói " + NomeHeroi + " está no nível Radiante")
        break    
}