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

// 2) write code to calculate when the next train will arrive; this should be relative to current time

// DOM Elements
const myForm = document.querySelector('.myForm');
const trainName = document.getElementById('train-name');
const destination = document.getElementById('destination');
const firstDepart = document.getElementById('first-departure');
const freqOfDeparts = document.getElementById('depart-frequency');
const submitBtn = document.querySelector('.sub-btn');

// Step 1 -- create an onclick function
function handleSubmit(e) {
  // preventing the form from automatically submitting
  e.preventDefault();

  // Step 2 -- store and trim form inputs
  let trainNameVal = trainName.value.trim();
  let destVal = destination.value.trim();
  let firstDepartVal = firstDepart.value.trim();
  let freqVal = freqOfDeparts.value.trim();

  // console.log(trainNameVal, destVal, firstDepartVal, freqVal);
  // Step 3 -- save to Firebase.
  fireDB.ref().set({
    trainName: trainNameVal,
    destination: destVal,
    firstDepart: firstDepartVal,
    freqDepart: freqVal
  });
}

// Step 4 -- use momentJS to calculate arrivals and departures relative to current time
function calcTrainDeparts() {
  fireDB.ref().on('value', snapshot => {
    console.log(snapshot.val());
  });
}

calcTrainDeparts();
// Step 5 -- New fucntion to dynamically create new elements.
// Step 6 -- New function Be able to remove an dynamically created element

submitBtn.addEventListener('click', handleSubmit);
