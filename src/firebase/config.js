import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAI_klkINh-tqEKPV_MoNJ5TvIPNA9vQLM",
  authDomain: "pic-uploader-49a20.firebaseapp.com",
  projectId: "pic-uploader-49a20",
  storageBucket: "pic-uploader-49a20.appspot.com",
  messagingSenderId: "653327650676",
  appId: "1:653327650676:web:7e59993251d959ec71e621",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
