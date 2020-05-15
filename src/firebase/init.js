import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAeTcMk0czKhuwkL1aO1ApXjh0yfq5m7kU",
  authDomain: "fxbois-razer.firebaseapp.com",
  databaseURL: "https://fxbois-razer.firebaseio.com",
  projectId: "fxbois-razer",
  storageBucket: "fxbois-razer.appspot.com",
  messagingSenderId: "584841190549",
  appId: "1:584841190549:web:0bd3c39026e152bb5e4f9c"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()