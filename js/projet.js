// Stockage des mots

var citationCourante = [
    ["Avec","Considérant","Ou que nous méne","Eu égard à","Vu","En ce qui concerne"],
    ["la restriction","l'orientation","la crise","l'inertie","la difficulté","l'austérité"],
    ["présente,","actuelle,","générale,","induite,","conjoncturelle,","observée,"],
    ["il convient d'","il faut","on se doit d'","il est préférable d'","il serait intéressant d'","il ne faut pas négliger d'"],
    ["étudier","examiner","favoriser","prendre en considération","anticiper","imaginer"],
    ["toutes les","chacune des","la majorité des","la simultanéité des","l'ensemble des","la somme des"],
    ["solutions,","issues,","problématiques,","voies,","alternatives,","organisations matricielles,"],
    ["imaginables","possibles","s'offrant à nous","de bon sens","envisageables","éventuelles"],
    ["à long terme.","pour longtemps.","à l'avenir.","pour le futur.","depuis longtemps.","à court terme."]
];   


var citationCelebre = [
    ["Dans le cas particulier de","Quelle que soit","Du fait de","Tant que durera","Quoi qu'on dise concernant","Non obstant"],
    ["la dégradation","cette rigueur","la dualité de la situation","la baisse de confiance","la morosité","la situation"],
    ["contextuelle,","de ces derniers temps,","de l'époque actuelle,","intrinsèque,","que nous constatons,","observée,"],
    ["on ne peut se passer d'","il est nécessaire d'","il serait bon d'","il faut de toute urgence","je recommande d'","je préconise un audit afin d'"],
    ["uniformiser","remodeler","avoir à l'esprit","se remémorer","gérer","fédérer"],
    ["la totalité des","la globalité des","les relations des","certaines","la plus grande partie des","les principales"],
    ["améliorations,","ouvertures,","synergies,","actions,","options,","décisions,"],
    ["réalisables","déclinables","pertinentes","que nous connaisons","évidentes","optimales"],
    ["rapidement.","dans une perspective correcte.","avec toute la prudence requise.","de toute urgence.","même si ce n'est pas facile.","très attentivement."]
];   


var citationGenerale = [
    ["Compte tenu de","Malgré","Pour réagir face à","Afin de circonvenir à","Dans le but de pallier à","Si vous voulez mon avis concernant"],
    ["l'ambiance","la politique","la fragilité","complexité","l'inconstance","cette inflexion"],
    ["découvre,","première,","fois,","réalise,","découvert,","certains,"],
    ["il est très important d'","il ne faut pas s'interdire d'","nous sommes contraints d'","je suggère fortement d'","je n'exclus pas d'","je vous demande d'"],
    ["comprendre","analyser","appréhender","expérimenter","essayer","caractériser"],
    ["systématiquement les","précisément les","toutes les","chacune des","l'ensemble des","la somme des"],
    ["modalités,","hypothéses,","stratégies,","solutions,","issues,","problématiques,"],
    ["que nous connaisons","évidentes","optimales","opportunes","emblématiques","draconiennes"],
    ["très attentativement.","avec beaucoup de recul.","parce que la nature a horreur du vide.","parce que nous ne faisons plus le même métier.","toutes choses étant égales par ailleurs.","et déjà en notre possession."]

];


// Déclarations des fonctions 
function aleatoire(partieDePhrase) {
    return partieDePhrase[Math.floor(Math.random() * partieDePhrase.length)]
}

function genererCitation (tableauDeCitation) {
    var phrase ="";

    //Assemblage des mots aleatoire
    
    tableauDeCitation.forEach(function(partie) {
        phrase += aleatoire(partie) + " ";
    }); 

    console.log("\" " + phrase + "\"\n\n");
}


console.log("Bienvenue dans le générateur des citations !\n\n");

var choix;
var nbCitation = 0;

while (choix != 0) {
    console.log("1 : Générer citation courante");
    console.log("2 : Générer citation célèbre")
    console.log("3 : Générer citation générale")
    console.log("0 : Quitter le programme");
    var choix = Number(prompt("Choisissez le type de citation à générer ? (1) Courante (2) Célèbre (3) Générale (0) Pour quitter "));

    switch (choix) {
        case 1:
            console.log("\nCombien de citations courantes voulez-vous générer ?\n"); 
            nbCitation = Number(prompt("Choisissez la quantité de citations. (Maximun 5)"));  
            console.log("\nVous avez choissi générer " + nbCitation +  " citation (s) ! \n\n");

            if ((nbCitation >= 1) && (nbCitation <= 5)) {
                for (var i = 1; i <= nbCitation; i++) {
                    genererCitation(citationCourante);
                }
            } else 
                console.log("Option non valide, veuillez selectionner un nombre entre 1 et 5 !\n\n");
            
            break;

        case 2:                  
            console.log("\nCombien de citations célèbre voulez-vous générer ?\n");
            nbCitation = Number(prompt("Choisissez la quantité de citations. (Maximun 5)"));  
            console.log("\nVous avez choissi générer " + nbCitation +  " citation (s) ! \n\n");

            if ((nbCitation >= 1) && (nbCitation <= 5)) {
                for (var i = 1; i <= nbCitation; i++) {
                    genererCitation(citationCelebre);
                }
            } else 
                console.log("Option non valide, veuillez selectionner un nombre entre 1 et 5 !\n\n");
            
            break;

        case 3:
            console.log("\nCombien de citations générale voulez-vous générer ?\n");           
            nbCitation = Number(prompt("Choisissez la quantité de citations. (Maximun 5)"));
            console.log("\nVous avez choissi générer " + nbCitation +  " citation (s) ! \n\n");

            if ((nbCitation >= 1) && (nbCitation <= 5)) {
                for (var i = 1; i <= nbCitation; i++) {
                    genererCitation(citationGenerale);
                }
            } else 
                console.log("Option non valide, veuillez selectionner un nombre entre 1 et 5 !\n\n");

            
            break;

        case 0:
            console.log("\nAu revoir !");
            break;

        default:
            console.log("\nOption non valide, veuillez selectionner une option ci-dessous !\n\n");
            break;
    }
}
