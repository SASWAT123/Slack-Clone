import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyClyQho_yCL8m3yV44UvucBlLlQgh_vkns",
  authDomain: "react-slack-clone-1a70e.firebaseapp.com",
  databaseURL: "https://react-slack-clone-1a70e.firebaseio.com",
  projectId: "react-slack-clone-1a70e",
  storageBucket: "react-slack-clone-1a70e.appspot.com",
  messagingSenderId: "320602470010",
  appId: "1:320602470010:web:06bf8b607b6b6408786dc3",
  measurementId: "G-CPXX2ECJE9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
