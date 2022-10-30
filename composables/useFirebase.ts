//https://firebase.google.com/docs/auth/web/start?hl=en&authuser=0

import { async } from "@firebase/util";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
//------------Sign up new users------------------------------

export const createUser = async (email, password) => {
  const auth = getAuth();
  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  return credentials;
};

//------------Sign in existing users-----------------------

export const signInUser = async (email, password) => {
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return credentials;
};

//------------------state observer-------------------

export const initUser = async () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(user);
    } else {
      // User is signed out
      // ...
    }
  });
};

export const signOutUser = async () => {
  const auth = getAuth();
  const result = await auth.signOut();
  console.log("sign out", result);
  return result;
};
