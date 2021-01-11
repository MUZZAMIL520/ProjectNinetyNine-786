import firebase from "firebase";
import "firebase/storage";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyCicSM57p155wIA-BUzBci_3H-WVESIPzg",
  authDomain: "ninety-nine-c9929.firebaseapp.com",
  databaseURL: "https://ninety-nine-c9929.firebaseio.com",
  projectId: "ninety-nine-c9929",
  storageBucket: "ninety-nine-c9929.appspot.com",
  messagingSenderId: "571705499085",
  appId: "1:571705499085:web:e8ef9f2eed1b95676fb884",
  measurementId: "G-JP88L54BN3",
});

export function getData() {
  let naats = [];
  app
    .database()
    .ref("/naats")
    .on("value", (snapshot) => {
      snapshot.forEach((snap) => {
        var data = snap.val();
        naats.push({
          title: data.title,
          icon: data.icon,
          duration: data.duration,
          artist: data.artist,
          id: snap.key,
        });
      });
    });
  return naats;
}
