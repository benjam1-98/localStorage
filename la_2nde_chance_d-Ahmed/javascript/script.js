document.querySelector('button').addEventListener('click', function () {

    // quand on clique sur le bouton, ça créé un nouveau paragraphe
    const newPrgrph = document.querySelector("P");

    // le nouveau paragraphe est un clone du paragaphe déjà là au chargement de la page
    const clone = newPrgrph.cloneNode(true);

    //le clone est ajouté au main du html
    document.querySelector('main').append(clone)
})

// chaque modification des paragraphes sera sauvegardée même après fermeture de la fenêtre du navigateur grâce à propriété localStorage

document.body.onkeyup = function (a) {

    localStorage.setItem('content', document.querySelector('main').innerHTML)

}

if(localStorage.getItem('content')){
    document.querySelector('main').innerHTML = localStorage.getItem('content')
}

// si on clique sur le bouton clear et qu'on reload la page, le localStorage sera vidé = les paragraphes seront vidés de leur contenu

document.querySelector('.button2').addEventListener('click', function() {
    localStorage.clear();
})