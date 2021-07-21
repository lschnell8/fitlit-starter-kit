//Imports
import {getApiData} from './apiCalls';

import User from './User';
import UserRepository from './UserRepository';
import Hydration from './Hydration';
import HydrationRepository from './HydrationRepository';
import Sleep from './Sleep';
import SleepRepository from './SleepRepository';

import Chart from 'chart.js/auto';

import './css/styles.css';

//Global variables and Query Selectors
let user;
let userRepo;
let hydration;
let hydrationRepo;
let sleep;
let sleepRepo;

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
});  

console.log('This is the JavaScript entry file - your code begins here.');

//Data Retrieval Functions
const fetchData = () => {
  getApiData('users')
  .then((data) => {
    user = new User(data.userData[Math.floor(Math.random() * data.userData.length)])
    userRepo = new UserRepository(data.userData)
    displayUserData(user)
    compareAvgSteps()
  })
  getApiData('hydration')
  .then((data) => {
    hydration = new Hydration(data.hydrationData)
    hydrationRepo = new HydrationRepository(data.hydrationData)
    displayUserHydro()
    console.log(hydrationRepo.ozDrankInWeek(2, '2019/06/15'))
  })
  getApiData('sleep')
  .then((data) => {
    sleep = new Sleep(data.sleepData)
    sleepRepo = new SleepRepository(data.sleepData)
    displayUserSleep()
  })
};


//DOM Display Functions

const displayUserData = () => {
  userName.innerText = user.getFirstName();
  userProfile.innerText = user.name;
  userId.innerText = user.id;
  userAddress.innerText = user.address;
  userEmail.innerText = user.email; 
};


const displayUserHydro = () => {
  let chart = new Chart(hydroChart, {
    type: 'line',
    data: {
      labels: [""],
      datasets: [
        {
          label: "Water in fluid ounces",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: []
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Water Consumption'
      }
    }
  })
};

const displayUserSleep = () => {
  let chart = new Chart(sleepChart, {
    type: 'line',
    data: {
      labels: [""],
      datasets: [
        {
          label: "Sleep",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: []
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Sleep'
      }
    }
  })
};

const compareAvgSteps = () => {
  let chart = new Chart(walkingChart, {
    type: 'bar',
    data: {
      labels: ["Average User Steps", "My Steps"],
      datasets: [
        {
          label: "Average Steps",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [userRepo.calculateAverageStepGoal(), user.dailyStepGoal]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Average Steps'
      }
    }
  })
}

