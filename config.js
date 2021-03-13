import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBTv8iVqh_H3-DLKT--OfD9sQAKdjtUGj8",
  authDomain: "c58-project-e2fba.firebaseapp.com",
  databaseURL: "https://c58-project-e2fba.firebaseio.com",
  projectId: "c58-project-e2fba",
  storageBucket: "c58-project-e2fba.appspot.com",
  messagingSenderId: "22752658162",
  appId: "1:22752658162:web:cc349b41227a5fc9f5866b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database(); 
