import Firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA5Em2gU5WB4VX3_ixbJnSrLKQoGKOo0EE",
    authDomain: "globalcovidtracking.firebaseapp.com",
    projectId: "globalcovidtracking",
    storageBucket: "globalcovidtracking.appspot.com",
    messagingSenderId: "934077401916",
    appId: "1:934077401916:web:02e452e929d8891706ac39"
  };
  
//   const app = Firebase.initializeApp(firebaseConfig);
//   export const db = app.database();

Firebase.initializeApp(firebaseConfig);

export default Firebase;