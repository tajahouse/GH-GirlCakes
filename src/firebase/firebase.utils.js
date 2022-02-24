import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA4IKdQ_lrRYMqJWVCBwGHuH77OjeTS4o4",
  authDomain: "gh-girlcakes.firebaseapp.com",
  projectId: "gh-girlcakes",
  storageBucket: "gh-girlcakes.appspot.com",
  messagingSenderId: "843442050575",
  appId: "1:843442050575:web:d1f3b50f5048ebd1e4357a",
  measurementId: "G-ZRH266MWK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//when initializing firebase, couldn't use basic firebase command "firebase login", had to use "furebase login:ci --interactive"
//Token: 1//0927uUdHfoa-VCgYIARAAGAkSNwF-L9IrFu5hg2hgd52VmqRXhHiF0_e0zM1g0tmrBGeneVNkjfgamp03ZD5vc3zRuxZJXiC9v9E