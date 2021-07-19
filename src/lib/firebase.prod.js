import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';
const config={
apiKey: "AIzaSyBZyTLrRBuvdHYwengELb0qyHl8zXBdhOI",
authDomain: "netflix-clone-7004d.firebaseapp.com",
projectId: "netflix-clone-7004d",
storageBucket: "netflix-clone-7004d.appspot.com",
messagingSenderId: "813240878610",
appId: "1:813240878610:web:ca004f2d54d97f78c6bacb"
};

const firebase = Firebase.initializeApp(config);
//seedDatabase(firebase);

export { firebase };