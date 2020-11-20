function alphabet(alphabetEnClaire,cle) {
    
    if (cle<=0 || cle >25) {
        alert('La clé est incorrecte');
        return;
    }

    let tab1 = alphabetEnClaire.slice(cle)

    tab1 = alphabetEnClaire.slice(alphabetEnClaire.length-cle)

    let tab2 = alphabetEnClaire.slice(0,alphabetEnClaire.length-cle)

    let alphaCryp = tab1.concat(tab2)
    //console.log(alphaCryp)

    return alphaCryp;
}

