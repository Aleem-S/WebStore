import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const config = {
    apiKey: "AIzaSyA81-a5W-JfWGY-Ccb_6IQglkoaWJXMpYQ",
    authDomain: "dexdiscuss.firebaseapp.com",
    databaseURL: "https://dexdiscuss.firebaseio.com",
    projectId: "dexdiscuss",
    storageBucket: "dexdiscuss.appspot.com",
    messagingSenderId: "903658145108",
    appId: "1:903658145108:web:8321f9b5239e18ef50b4c1"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth)
      return false;
      const userRef = firestore.doc('users/'+userAuth.uid);
      const snapshot = await userRef.get();
      if(!snapshot.exists)
      {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
               displayName,
               email,
               createdAt, 
               ...additionalData 
            }); 
        }
        catch(err)
        {
          console.log('Error creating user: ', err.message);
        }
      }
      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;