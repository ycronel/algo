let nbNotes = prompt("Combien de notes voulez-vous ajouter ?");
let tabNotes = [];

function calcMoyenne(tab) {
    let somme = 0;
    let moyenne = 0;
    for(let i = 0; i < tab.length; i++) {
        somme += tab[i];
    }
    moyenne = somme / tab.length;
    return moyenne;
}

function notesMax(tab){
    let max = 0;
    for(let i = 0; i < tab.length; i++) {
        if(tab[i] > max) {
            max = tab[i];
        }
    }
    return max;
}

function notesMin(tab){
    let min = 20;
    for(let i = 0; i < tab.length; i++) {
        if(tab[i] < min) {
            min = tab[i];
        }
    }
    return min;
}

if(nbNotes < 1) {
    console.log("Vous avez dû vous tromper");
} else {
    for(let i = 0; i < nbNotes; i++) {
        tabNotes[i] = Number(prompt("Combien à eu l'élève numéro " + (i+1) + " ?"));
    }
}

console.table(tabNotes);
console.log("La moyenne des notes est : " + calcMoyenne(tabNotes));
console.log("La note maximale est : " + notesMax(tabNotes));
console.log("La note minimale est : " + notesMin(tabNotes));
