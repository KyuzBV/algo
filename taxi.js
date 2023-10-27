const playlist = ["Anissa", "Bohemian Rhapsody", "Hot Blood", "erase me", "Strange"]
class Personnage{
    constructor(name, hp){
        this.name = name
        this.hp = hp
    }
}

const personnage = new Personnage("Tinky-Winky", 10)

class Trajet{
    constructor(){
        this.musique = null
        this.feu_rouge = 30
        this.changements = 0
    }
}

const trajet = new Trajet()

for (let i = 0 ; i!= 30 ; i++){
    trajet.musique = playlist[Math.floor(Math.random() * playlist.length)]
    console.log(`Vous écoutez : ${trajet.musique}`)
    trajet.feu_rouge = trajet.feu_rouge - 1
    if (trajet.musique == "Anissa"){
        personnage.hp = personnage.hp - 1
        console.log("Tinky-Winky vient d'écouter Anissa, il perd 1 HP et change de taxi.")
        if (personnage.hp == 0){
            console.log("Oh non ! Tinky-Winky a fait une overdose de Wejdene, ses HP sont tombés à 0 !")
            break
        }
  
        trajet.changements = trajet.changements + 1
        console.log(`Il vous reste ${trajet.feu_rouge} feux rouges à passer, vous avez encore ${personnage.hp} HP, et vous avez effectué ${trajet.changements} changement(s).`)
    }
    else {
        console.log(`Il vous reste ${trajet.feu_rouge} feux rouges à passer`)
        if (trajet.feu_rouge == 0 ) {
            console.log (`Bravo ! Tinkiy-Winky est rentré chez lui saint d'esprit !`)
        }
        
    }
}