
import firebase from 'firebase'

let database;
export const init = () => {
  const config = {
    apiKey: "AIzaSyC4qFtLFeEhYgw4MLfEB_NauujF1dYZJl0",
    authDomain: "todo-app-e9393.firebaseapp.com",
    databaseURL: "https://todo-app-e9393.firebaseio.com",
    projectId: "todo-app-e9393",
    storageBucket: "todo-app-e9393.appspot.com",
    messagingSenderId: "498712638607"
  };
  firebase.initializeApp(config);
  database = firebase.database()

}

