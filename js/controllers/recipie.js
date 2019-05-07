/*

    - Leggere il parametro ID
    - Richiedere al DB la ricetta realtiva all'ID
    - Mostrare la ricetta nella view

*/
var db = firebase.firestore();

function loadRecipie() {
    var recipieId = getIdFromURL();
    db.collection('recipies')
    .doc(recipieId)
    .onSnapshot(function(item){
       var recipie = item.data();
       var recipieId = findGetParameter('id');
       console.log(recipieId);

       addRecipie(recipie, recipieId);

    })

}

function getIdFromURL() {
    return findGetParameter('id');
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });

        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('myParam');
    
        
    return result;
}

function addRecipie(recipie, recipieId){

    var title = recipie.name;
    var difficulty = recipie.difficulty;
    var description = recipie.description;
    var cookingTime = recipie.cookingTime;
    var preparationTime = recipie.preparationTime;
    var people = recipie.people;
    var cost = recipie.cost;

    console.log(title);
    $('#titolo').text(title);
    $('#difficulty').text('Difficoltà: ' + difficulty);
    $('#description').text(description);
    $('#cookingTime').text('Tempo di cottura: ' + cookingTime + ' minuti');
    $('#preparationTime').text('Tempo di preparazione: ' + preparationTime + ' minuti');
    $('#people').text('Dosi per: '+ people + ' persone');
    $('#cost').text('Costo: ' + cost);

}



loadRecipie();



