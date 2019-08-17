// 1) initiate firebase connection
const config = {
  apiKey: 'AIzaSyDhcZSNwMQuk2bn5QMLjKvAwAfIdICBKsg',
  authDomain: 'train-scheduler-88017.firebaseapp.com',
  databaseURL: 'https://train-scheduler-88017.firebaseio.com',
  projectId: '',
  storageBucket: 'train-scheduler-88017.appspot.com'
};

firebase.initializeApp(config);

const fireDB = firebase.database();
