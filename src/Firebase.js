import * as firebase from 'firebase'

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAqgqaP5OVezj6JA27hqp-i46RITGi50AM",
    authDomain: "signal-clone-32141.firebaseapp.com",
    projectId: "signal-clone-32141",
    storageBucket: "signal-clone-32141.appspot.com",
    messagingSenderId: "616132378802",
    appId: "1:616132378802:web:81e30ad9711d9b788d89ab"
  };



  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }
  
  const db = app.firestore();
  const auth = firebase.auth();
  
  export { db, auth };