// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
console.log('firebase =>', initializeApp());

const firebaseConfig = {
  apiKey: 'AIzaSyAohGaG55Xtbd2673S3ZrQRqMHtYEnhhFo',
  authDomain: 'login-a9683.firebaseapp.com',
  projectId: 'login-a9683',
  storageBucket: 'login-a9683.appspot.com',
  messagingSenderId: '1087480153061',
  appId: '1:1087480153061:web:257932d7f431ccfb2ae50c',
};

const fire = initializeApp(firebaseConfig);

export default fire;
