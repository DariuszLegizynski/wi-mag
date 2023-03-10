import firebase from "firebase/app"
import "firebase/firestore"
// import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyAbLVr7BDJeD4AywgkaJBWlGwW1Me1NHg8",
  authDomain: "wi-mag-7587c.firebaseapp.com",
  projectId: "wi-mag-7587c",
  storageBucket: "wi-mag-7587c.appspot.com",
  messagingSenderId: "334991021192",
  appId: "1:334991021192:web:eae2ed499737f39c37fb3d",
  measurementId: "G-QF0CH4ZBCP"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
// const analytics = getAnalytics(firebaseApp)

export default firebaseApp.firestore()