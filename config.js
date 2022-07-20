import firebase from "firebase";


//add a configuração do banco aqui

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
