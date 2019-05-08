// THIS SCRIPT MANAGES THE create.html view

var db = firebase.firestore();

function saveRecipie(event){
    event.preventDefault();
    
    var currentRecipie = {};
    Object.assign(currentRecipie, recipie);

    currentRecipie.name = $('#name').val();
    currentRecipie.people = $('#people').val();
    currentRecipie.preparationTime = $('#preparationTime').val();
    currentRecipie.cookingTime = $('#cookingTime').val();
    currentRecipie.difficulty = $('#difficulty').val();
    currentRecipie.cost = $('#cost').val();
    currentRecipie.description = $('#description').val();

    console.log(currentRecipie);

    db.collection('recipies')
    .doc()
    .set(currentRecipie)
    .then(function() {
        console.log("Document successfully written!");
        alert('Yes ;)');
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

    return false;
}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});