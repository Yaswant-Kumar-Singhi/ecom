import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyC7WoujiKAm2WBHVPyGJU1NVDXTQoyy_m0",
    authDomain: "ecom-245d3.firebaseapp.com",
    projectId: "ecom-245d3",
    storageBucket: "ecom-245d3.appspot.com",
    messagingSenderId: "850962695838",
    appId: "1:850962695838:web:20cac483503155835fdd8f"

})

export const auth = firebase.auth();
export default app;

