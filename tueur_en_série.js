const survivants = ["Tinky-Winky", "Po", "Laa-laa", "Dipsy", "Trotro", "Tchoupi", "Didou", "Oui-Oui", "Mickey", "Winnie", "Dora"];

class Survivant {
    constructor(name, caractéristique, proba_mort, proba_tir, proba_esquive, proba_kamikaze) {
        this.name = name;
        this.caractéristique = caractéristique;
        this.hp = 100;
        this.proba_mort = proba_mort;
        this.proba_tir = proba_tir;
        this.proba_esquive = proba_esquive;
        this.proba_kamikaze = proba_kamikaze;
    }

    attaque_jason() {
        const random = Math.random();
        if (random < this.proba_mort) {
            return `${this.name} a attaqué Jason mais a malheureusement perdu la vie.`;
        } else if (random < this.proba_mort + this.proba_tir) {
            return `${this.name} a attaqué Jason et lui a infligé 15 points de dégâts avant de mourir.`;
        } else {
            return `${this.name} a attaqué Jason, mais Jason a esquivé l'attaque.`;
        }
    }
}

class Tueur {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
}

const Jason = new Tueur("Jason", 100);

const caractéristiques = {
    nerd: [0.3, 0.3, 0.3, 0.1],
    sportif: [0.4, 0.3, 0.2, 0.5],
    blonde: [0.2, 0.4, 0.5, 0.3],
    chanceux: [0.3, 0.5, 0.2, 0.4],
    malchanceux: [0.1, 0.4, 0.4, 0.4]
};

const survivants_choisis = [];

for (let i = 0; i < 5; i++) {
    const random_survivant = Math.floor(Math.random() * survivants.length);
    const random_caractéristique = Object.keys(caractéristiques)[Math.floor(Math.random() * Object.keys(caractéristiques).length)];
    const [proba_mort, proba_tir, proba_esquive, proba_kamikaze] = caractéristiques[random_caractéristique];
    const survivant = new Survivant(survivants[random_survivant], random_caractéristique, proba_mort, proba_tir, proba_esquive, proba_kamikaze);
    survivants_choisis.push(survivant);
}

while (Jason.hp > 0 && survivants_choisis.length > 0) {
    const randomSurvivantIndex = Math.floor(Math.random() * survivants_choisis.length);
    const survivant = survivants_choisis[randomSurvivantIndex];
    const action = survivant.attaque_jason();
    
    if (action.includes("a attaqué Jason mais a malheureusement perdu la vie.")) {
        console.log(`${survivant.name} a été tué par Jason.`);
        survivants_choisis.splice(randomSurvivantIndex, 1);
    } else if (action.includes("a attaqué Jason et lui a infligé 15 points de dégâts avant de mourir.")) {
        Jason.hp -= 15;
        console.log(action);
    } else {
        console.log(action);
    }
}

if (Jason.hp <= 0) {
    console.log("Jason est mort. Les survivants ont gagné!");
} else {
    console.log("Les survivants ont été éliminés. Jason est le vainqueur.");
    console.log("Survivants éliminés:");
    for (const survivant of survivants_choisis) {
        console.log(`${survivant.name} (${survivant.caractéristique})`);
    }
}