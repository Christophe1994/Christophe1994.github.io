function decryptage(alphabetCrypter, alphabetEnClaire, textChiffer)
{
    let element;
    let textEnClaire = '';
    let index;

    for (let i = 0; i < textChiffer.length; i++) {
        element = textChiffer[i].toUpperCase();
        index = alphabetCrypter.indexOf(element);
        if (index >= 0) {
            textChiffer[i] == textChiffer[i].toUpperCase()? textEnClaire += alphabetEnClaire[index] : textEnClaire += alphabetEnClaire[index].toLowerCase();
        } else {
            textEnClaire += " "
        }
    }

    /*if (textChiffer[i] == textChiffer[i].toUpperCase()) {
        return textEnClaire += alphabetEnClaire[index]
    } else {
        textEnClaire += alphabetEnClaire[index].toLowerCase()
    }*/
    return textEnClaire;
}