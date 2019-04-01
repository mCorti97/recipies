//CONTROLLER FOR INDEX.HTML

/*

- ottenere la lista di ricetta dal database
    - per ogni ricetta:
        - creare un elemento completo HTML da apporre in pagina
        - completare le informazioni dell'elemento dall'oggetto ricevuto dal db
        - apporlo in pagina 

*/

var db = firebase.firestore();

db.collection('recipies').get()
.then(function(doc){
    var recipies = doc.data();
    console.log(recipies);
});