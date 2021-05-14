import firebase from '../firebase';

export const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {})
    .catch((e) => {
      return e;
    });
};
