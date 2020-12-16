import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    

})

export const auth = firebase.auth();
export default app;

