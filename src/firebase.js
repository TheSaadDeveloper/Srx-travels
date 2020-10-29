import firebase from 'firebase';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCcB18GlUi7qHDDWdOL3LqtfNhXCvvraR0",
    authDomain: "react-website-1-72765.firebaseapp.com",
    databaseURL: "https://react-website-1-72765.firebaseio.com",
    projectId: "react-website-1-72765",
    storageBucket: "react-website-1-72765.appspot.com",
    messagingSenderId: "1049946787063",
    appId: "1:1049946787063:web:a0b914927cc8aabce757f2",
    measurementId: "G-10TB3LQM4Z"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db,auth};