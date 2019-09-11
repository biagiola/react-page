  import firebase from 'firebase/app'; // just import what we need
  import 'firebase/firestore'; // db
  import 'firebase/auth';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD5QATTDq1QqoraMGYjUG9gnjGIUw8tMi8",
    authDomain: "marioplan-7a958.firebaseapp.com",
    databaseURL: "https://marioplan-7a958.firebaseio.com",
    projectId: "marioplan-7a958",
    storageBucket: "marioplan-7a958.appspot.com",
    messagingSenderId: "262877137573"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
