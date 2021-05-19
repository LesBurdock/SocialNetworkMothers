import firebase from 'firebase';
import "firebase/auth";

 var firebaseConfig = {
    apiKey: "AIzaSyARj32S2YOzQYLvIyjbkQIDJcvzGjtRj5E",
    authDomain: "socialmumwork.firebaseapp.com",
    databaseURL: "https://socialmumwork-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "socialmumwork",
    storageBucket: "socialmumwork.appspot.com",
    messagingSenderId: "460604298704",
    appId: "1:460604298704:web:bb6b4d47daed44151195d5",
    measurementId: "G-FNE0RXWSZB"
  };

var fire = firebase.initializeApp(firebaseConfig);
export default fire;
