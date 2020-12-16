import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    

})

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export default app;

