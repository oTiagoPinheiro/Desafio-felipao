let NomeHeroi = "Devnetor"
let XPacumulada = 10011
let  nivelHeroi 

switch (true) {
    case (XPacumulada < 1000):
    nivelHeroi = "Ferro"     
    console.log ("Herói " + NomeHeroi + " está no nível " + nivelHeroi)
        break
    case (XPacumulada <= 2000):
        nivelHeroi = "Bronze"
        console.log ("Herói " + NomeHeroi + " está no nível " + nivelHeroi)
        break
    case (XPacumulada <= 5000):
        nivelHeroi = "Prata"
        console.log ("Herói " + NomeHeroi + " está no nível " + nivelHeroi)
        break
    case (XPacumulada <= 7000):
        nivelHeroi = "Ouro"
        console.log ("Herói " + NomeHeroi + " está no nível " + nivelHeroi)
        break
    case (XPacumulada <= 8000):
        nivelHeroi = "Platina"
        console.log ("Herói " + NomeHeroi + " está no nível " + nivelHeroi)
        break
    case (XPacumulada <= 9000):
        nivelHeroi = "Ascendente"
        console.log ("Herói " + NomeHeroi + " está no nível " + nivelHeroi)
        break
    case (XPacumulada <= 10000):
        nivelHeroi = "Imortal"
        console.log ("Herói " + NomeHeroi + " está no nível " + nivelHeroi)
        break
    case (XPacumulada >= 10001):
        nivelHeroi = "Radiante"
        console.log ("Herói " + NomeHeroi + " está no nível " + nivelHeroi)
        break    
}