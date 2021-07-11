

import { expect } from 'chai';
import User from '../src/User';

describe('User', () => {
  let userData, user;

  beforeEach(() => {
    userData = [
      {
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [
          16,
          4,
          8
        ]
      },
      {
        "id": 2,
        "name": "Jarvis Considine",
        "address": "30086 Kathryn Port, Ciceroland NE 07273",
        "email": "Dimitri.Bechtelar11@gmail.com",
        "strideLength": 4.5,
        "dailyStepGoal": 5000,
        "friends": [
          9,
          18,
          24,
          19
        ]
      },
      {
        "id": 3,
        "name": "Herminia Witting",
        "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
        "email": "Elwin.Tromp@yahoo.com",
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
        "friends": [
          19,
          11,
          42,
          33
        ]
      }];
      user = new User(userInfo);
    });

    it('should be a function', () => {
      expect(User).to.be.a('function');
    });

    it('should be an instance of User', () =>
    {
      expect(user).to.be.an.instanceof(User);
    });  

    it.skip('it should be able to return user data by ID', () => {
      expect(userRepository.findUserData(2)).to.deep.equal(userData[1]);
    });

    it.skip('it should determine average step goal among all users', () => {
      expect(userRepository.calculateAverageStepGoal()).to.equal(6667);
    });
  });
  

// It should have a parameter to take in a userData object
// Each user holds on to the user properties from the data file
// Should have a method to:
// Return a user’s first name only