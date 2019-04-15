  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBK3Bup16SarlRlEFUkJg_9zYkJWpGs_n8",
    authDomain: "recipies-a4768.firebaseapp.com",
    databaseURL: "https://recipies-a4768.firebaseio.com",
    projectId: "recipies-a4768",
    storageBucket: "recipies-a4768.appspot.com",
    messagingSenderId: "720307443871"
  };
  firebase.initializeApp(config);

  
  firebase.firestore().enablePersistence()
  .catch((err) => {
    console.log("Errore in Firestore Persistence: " ,err);
  });