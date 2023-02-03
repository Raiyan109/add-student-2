import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbsxdmCT2_sGHhFQgthDUuxryoo5-9xYU",
    authDomain: "add-student-mern.firebaseapp.com",
    projectId: "add-student-mern",
    storageBucket: "add-student-mern.appspot.com",
    messagingSenderId: "852379215240",
    appId: "1:852379215240:web:3888cafe9439b93486863d"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };