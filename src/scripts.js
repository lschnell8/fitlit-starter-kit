//Imports
import {getApiData} from './apiCalls';

import User from './User';
import UserRepository from './UserRepository';

import Hydration from './Hydration';
import HydrationRepository from './HydrationRepository';

// import Sleep from './Sleep';
// import SleepRepository from './SleepRepository';

import Chart from 'chart.js/auto';

//Global variables and Query Selectors
let user;
let userRepo;
// let hydration;
// let HydrationRepo;
// let sleep;
// let sleepRepo;
// let activity;
// let activityRepo;

// document.querySelector()
// document.getElementById()
const userName = document.getElementById('userName');
const userProfile = document.getElementById('userProfile');
const userId = document.getElementById('id');
const userAddress = document.getElementById('address');
const userEmail = document.getElementById('email');
const hydroChart = document.getElementById('hydroChart');
const sleepChart = document.getElementById('sleepChart');
const walkingChart = document.getElementById('walkingChart');


//Event Listeners
window.addEventListener('load', function() {
  fetchData()
  
  //this will be where we call anthing that retrieves API
});  

//Functions


//Helper Functions


// An example of how you tell webpack to use a CSS file
import './css/styles.css';
// import Chart from '../node_modules/chart.js';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file


//Create card info ---- Fetch user repo api, then parse into a single user --- Use UserRepository.js and User.js ----- Choose a random user-----Math.random()

//Data Retrieval Functions

const fetchData = () => {
  getApiData('users')
  .then((data) => {
    user = new User(data.userData[Math.floor(Math.random() * data.userData.length)])
    userRepo = new UserRepository(data.userData)
    displayUserData(user)
    compareAvgSteps()
    getApiData('hydration')

  })
};

// const createUser = () => {
//   getApiData('users')
//   .then(response => user = new User(response.userData[Math.floor(Math.random() * response.userData.length)]))
//   .then(response => 
//     console.log('userInstance', user))
//   .then(response => displayUserData(user))
//   .then(response => console.log(user))
//   }
  
//   const createUserRepo = () => {
//     getApiData('users')
//     .then(response => userRepo = new UserRepository(response.userData))
//     .then(response => console.log('userRepo', userRepo))
//     .then(response => compareAvgSteps(user))
//   }

// const createHydroRepo = () => {
//   getApiData('hydration')
//   .then(response =>  hydroRepo = new HydrationRepository(response.hydrationData)
//   .then(response => console.log('HydrationRepo', hydroRepo))
//   .then(response => 
//       //insert display helper function
//       )
// }

// const createUserHydro = () => {
//   getApiData('hydration')
//   .then(response => userHydration = new Hydration(response.hydrationData))
//   .then(response => console.log('userHydration', userHydration))
//   .then(response =>
//       //insert display helper function
//     )
// }

// const createSleepRepo = () => {
//   getApiData('sleep')
//   .then(response => sleepRepo = new SleepRepository(response.sleepData))
//   .then(response => console.log('sleepRepo', sleepRepo))
//   .then(response => 
//       //insert display helper function
//     ))
// }

// const createSleepData = () => {
// getApiData('sleep')
// .then(response => userSleep = new Sleep(response.sleepData))
// .then(response => console.log('userSleep', userSleep))
// .then(response => 
//       //insert display helper function
//     ))
// }



//DOM Display Functions

const displayUserData = () => {
  userName.innerText = user.getFirstName();
  userProfile.innerText = user.name;
  userId.innerText = user.id;
  userAddress.innerText = user.address;
  userEmail.innerText = user.email; 
};



// // const displayHydroRepo = () => {
 
// // };

// // const displayUserHydro = () => {
  
// // };

// // const displaySleepRepo = () => {
  
// // };

// // const displayUserSleep = () => {
  
// // };


const compareAvgSteps = () => {
  console.log('hey!', user)
  let chart = new Chart(walkingChart, {
    type: 'bar',
    data: {
      labels: ["Average User Steps", "My Steps"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [userRepo.calculateAverageStepGoal(), user.dailyStepGoal]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
  })
}

