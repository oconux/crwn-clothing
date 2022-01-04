import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBXp5BLSPUsC_ojw6vxnOEc2F2Z7zDI6W0",
  authDomain: "crwn-db-4c895.firebaseapp.com",
  projectId: "crwn-db-4c895",
  storageBucket: "crwn-db-4c895.appspot.com",
  messagingSenderId: "273093261716",
  appId: "1:273093261716:web:1835017ccff6953d8fb781",
  measurementId: "G-2LPH1J51RV"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if (!userAuth) return(console.log('no user auth'));

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;

}

firebase.initializeApp(config);

export const auth =  firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);




export default firebase;
