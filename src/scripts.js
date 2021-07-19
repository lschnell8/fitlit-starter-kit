//Imports
import {getApiData} from './apiCalls';

import User from './User';
import UserRepository from './UserRepository';

import Hydration from './Hydration';
import HydrationRepository from './HydrationRepository';

// import Sleep from './Sleep';
// import SleepRepository from './SleepRepository';

//Global variables and Query Selectors
let user;
let userRepo;
let hydration;
let HydrationRepo;
let sleep;
let sleepRepo;
// let activity;
// let activityRepo;

// document.querySelector()
// document.getElementById()
const userName = document.getElementById('userName');
const userProfile = document.getElementById('userProfile');
const userId = document.getElementById('id');
const userAddress = document.getElementById('address');
const userEmail = document.getElementById('email');


//Event Listeners
window.addEventListener('load', function() {
  createUserRepo();
  createUser();
  //this will be where we call anthing that retrieves API
});  

//Functions


//Helper Functions


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file


//Create card info ---- Fetch user repo api, then parse into a single user --- Use UserRepository.js and User.js ----- Choose a random user-----Math.random()
const createUserRepo = () => {
  getApiData('users')
  .then(response => userRepo = new UserRepository(response.userData))
  .then(response => console.log('userRepo', userRepo))
  .then(response => displayUserData(userRepo));
}

const createUser = () => {
  getApiData('users')
  .then(response => user = new User(response.userData[Math.floor(Math.random() * response.userData.length)]))
  .then(response => 
    console.log('userInstance', user))
  .then(response => displayUserName(user));
}

const createHydroRepo = () => {
  getApiData('hydration')
  .then(response =>  hydroRepo = new HydrationRepository(response.hydrationData)
  .then(response => console.log('HydrationRepo', hydroRepo))
  .then(response => 
      //insert display helper function
      )
}

const createUserHydro = () => {
  getApiData('hydration')
  .then(response => userHydration = new Hydration(response.hydrationData))
  .then(response => console.log('userHydration', userHydration))
  .then(response =>
      //insert display helper function
    )
}

const createSleepRepo = () => {
  getApiData('sleep')
  .then(response => sleepRepo = new SleepRepository(response.sleepData))
  .then(response => console.log('sleepRepo', sleepRepo))
  .then(response => 
      //insert display helper function
    ))
}

const createSleepData = () => {
getApiData('sleep')
.then(response => userSleep = new Sleep(response.sleepData))
.then(response => console.log('userSleep', userSleep))
.then(response => 
      //insert display helper function
    ))
}

// const createActivityRepo = () => {
//   getApiData('activity')
// .then(response => activityRepo = new ActivityRepository(response.activityData))
// .then(response => console.log('avtivityRepo', activityRepo))
// .then(response => 
      //insert display helper function
    //))
// }

// const createUser = () => {
//   getApiData('activity')
// .then(response => userActivity = new User(response.activityData))
// .then(response => console.log('userActivity', userAvtivity))
    // .then(response => 
    //   //insert display helper function
    //))
// }

//use calculateAverageStepGoal method in UserRepository.js and compare it to hard coded User data that is provided.

//Set up Chart.js and create "widgets" that display how much water a user consumed in 1 day and then the past 7 days of water consumed per day ----- establish current date hydration hard data provided and fluidOzByDate method in HydrationRepository.js ---- For 7 day data use ozDrankInWeek(id, date) in HydrationRepository.js -- Display all to DOM

//Display hours slept and quality of sleep for a user to the DOM ---- Data provided from API

//Display 7 days (for the latest week) worth of sleep data (hours slept and quality) to the DOM.

//Single user all-time average sleep quality and number of hours slept -- Display to DOM

const displayUserName = () => {
  userName.innerText = user.getFirstName();
};

const displayUserData = () => {
  userProfile.innerText = user.name;
  userId.innerText = user.id;
  userAddress.innerText = user.address;
  userEmail.innerText = user.email; 
};

const displayHydroRepo = () => {
 
};

// const displayUserHydro = () => {
  
// };

// const displaySleepRepo = () => {
  
// };

// const displayUserSleep = () => {
  
// };

// const displayActivityRepo= () => {
  
// };

// const displayUserActivity = () => {
  
// };