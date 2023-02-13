function calcMoyenne(tab) {
    let somme = 0;
    let moyenne = 0;
    for (let i = 0; i < tab.length; i++) {
        somme += tab[i];
    }
    moyenne = somme / tab.length;
    return moyenne;
}

function notesMax(tab) {
    let max = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > max) {
            max = tab[i];
        }
    }
    return max;
}

function notesMin(tab) {
    let min = 20;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] < min) {
            min = tab[i];
        }
    }
    return min;
}

let nbMatieres = prompt("Pour combien de matières voulez-vous entrer des notes ?");
let nbNotes = 0;
let tabNotes = [];
let tabMoyennes = [];
let tabNotesMax = [];
let tabNotesMin = [];

// Dder le nom de chaque matière
if (nbMatieres < 1) {
    console.log("Vous avez dû vous tromper");
} else {
    for (let i = 0; i < nbMatieres; i++) {
        //tabNotes[i] = String(prompt("Quel est le nom de la matière numéro " + (i + 1) + " ?"));
        // Dder le nombre de notes par matière
        nbNotes = Number(prompt("Combien de notes voulez-vous ajouter dans la matière " + (i + 1) + " ?"));
        if (nbNotes < 1) {
            console.log("Vous avez dû vous tromper");
            // Dder les notes
        } else {
            tabNotes[i]=[];
            for (let j = 0; j < nbNotes; j++) {
                tabNotes[i].push(Number(prompt("Combien à eu l'élève numéro " + (j + 1) + " ?")));
            }
        }
    }
}
for (let i = 0; i < nbMatieres; i++) {
    tabMoyennes[i] = calcMoyenne(tabNotes[i]);
    tabNotesMax[i] = notesMax(tabNotes[i]);
    tabNotesMin[i] = notesMin(tabNotes[i]);
}

console.table(tabNotes);
console.table(tabMoyennes);
console.table(tabNotesMax);
console.table(tabNotesMin);
