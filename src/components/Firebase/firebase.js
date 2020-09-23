import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const prodConfig = {
  apiKey: "AIzaSyCOCKHQkyoSgRSY8X5Y-fUdrF1qMn4qmLs",
  authDomain: "social-media-app-4cf3b.firebaseapp.com",
  databaseURL: "https://social-media-app-4cf3b.firebaseio.com",
  projectId: "social-media-app-4cf3b",
  storageBucket: "social-media-app-4cf3b.appspot.com",
  messagingSenderId: "864281722829",
  appId: "1:864281722829:web:f903ecb01ba94ff7378e84",
  measurementId: "G-DYLGLGD4LX",
};
const devConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATBASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
const config = process.env_NODE_ENV === "production" ? prodConfig : devConfig;

export const app = firebase.initializeApp(prodConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
