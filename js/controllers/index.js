/*
 - ottenere lista ricette database
 - per ogni ricetta: 
    - creare un elemento completo HTML da apporre nell pagina
    - completare le informazioni dell'elemento dall'oggetto ricevuto da DB
    - apporlo in pagina
*/

var db = firebase.firestore();

function loadRecipies(){
    db.collection('recipies').get().then(function(snapshot){

        console.log("Datas Snapshot:", snapshot );
    
        snapshot.forEach(function(item){
            console.log("Elements data: ", item.data());
            var recipieElementFromDB = item.data();

            var recipieIdFromDb = item.id;
            addRecipie(recipieElementFromDB, recipieIdFromDb);
        })
    
    });
}

function generateLinkFromId(id){
    var destinationPage = 'recipie.html';

    destinationPage += '?id=' +id;
    return destinationPage;
}

function clearContainer(){
    $('#recipie_list_container').empty();
}

function addRecipie(recipieItem, recipieId){

    var $sourceElement = $('#recipie_source_container .recipie_source');
    var $newElement = $sourceElement.clone();

    var title = recipieItem.name;
    $newElement.find('h4.card-title a').text(title);

    var difficulty = recipieItem.difficulty;
    $newElement.find('h5').text('Level: '+ difficulty);

    var description = recipieItem.description;
    var shortDescription = '';

    if (description != null && description != undefined){
        shortDescription = description.substring(0, 100);
    }

    $newElement.find('.card-text').text(shortDescription);

    var link = generateLinkFromId(recipieId);
    $newElement.find('.image-link').attr('href', link);
    $newElement.find('h4.card-title a').attr('href', link);

    var rating = parseInt(recipieItem.rating);
    $newElement.find('.card-footer .text-muted').append(rating);

    $('#recipie_list_container').append($newElement);
}

loadRecipies();
