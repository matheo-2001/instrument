function afficher(tab: number[]){
    for(let i=0;i<tab.length;i++){
        console.log(tab[i]);
    }
}

function permute(a: number, b: number): number []{
    return [b,a];
}

let tab: number[] = permute(10,12);
afficher(tab);