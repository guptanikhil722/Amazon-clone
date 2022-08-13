import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8F-ZkNDnosw45XISylf_SvbRLRL-VydU",
    authDomain: "clone-ce875.firebaseapp.com",
    projectId: "clone-ce875",
    storageBucket: "clone-ce875.appspot.com",
    messagingSenderId: "619615015190",
    appId: "1:619615015190:web:ff28aceeb520168aa0c037",
    measurementId: "G-V0BCY9YBFC"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export  {db, auth};