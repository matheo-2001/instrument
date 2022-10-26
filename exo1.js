function afficher(tab) {
    for (var i = 0; i < tab.length; i++) {
        console.log(tab[i]);
    }
}
function permute(a, b) {
    return [b, a];
}
var tab = permute(10, 12);
afficher(tab);
