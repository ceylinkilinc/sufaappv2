// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// 🔐 Senin Firebase projenin config bilgileri
const firebaseConfig = {
  apiKey: "AIzaSyDBsBnEoThhcuqA5vcSjT_PgGwcByILyDw",
  authDomain: "sufaapp-14a46.firebaseapp.com",
  projectId: "sufaapp-14a46",
  storageBucket: "sufaapp-14a46.appspot.com",
  messagingSenderId: "915734134341",
  appId: "1:915734134341:web:5ad9f6394e11e71e842d2c"
};

// 🔁 Tekrardan kaçınmak için initialize guard
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// ✨ Auth & Firestore dışa aktarımı
export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
