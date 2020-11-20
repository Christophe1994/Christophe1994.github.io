function cryptage(alphabetCrypter, alphabetEnClaire, textEnClaire)
{
    let element;
    let textChiffrer = '';
    let index;

    for (let i = 0; i < textEnClaire.length; i++) {
        element = textEnClaire[i].toUpperCase();
        index = alphabetEnClaire.indexOf(element);
        if (index >= 0) {
            textEnClaire[i] == textEnClaire[i].toUpperCase()? textChiffrer += alphabetCrypter[index] : textChiffrer += alphabetCrypter[index].toLowerCase();
        } else {
            textChiffrer += " "
        }
    }

    /*if (textEnClaire[i] == textEnClaire[i].toUpperCase()) {
        return textChiffrer += alphabetCrypter[index]
    } else {
        textChiffrer += alphabetCrypter[index].toLowerCase()
    }*/
    return textChiffrer;
}