import { expect } from 'chai';
import UserRepository from '../src/UserRepository';

// const chai = require('chai');
// const expect = chai.expect;

describe('User Repository', () => {
  let userData, userRepository;

  beforeEach(() => {
    userRepository = new UserRepository(userData);
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
    });

    it('should be a function', () => {
      expect(UserRepository).to.be.a('function');
    });

    it.skip('should be an instance of UserRepository', () =>
    {
      expect(UserRepository).to.be.an.instanceof(UserRepository);
    });  

    it.skip('it should be able to return user data by ID', () => {
      expect(UserRepository.findUserData(2)).to.deep.equal(userData[1]);
    });

    it.skip('it should determine average step goal among all users', () => {
      expect(UserRepository.calculateAverageStepGoal()).to.equal(6667);
    });




  });
  



// A UserRepository holds onto all of the User objects
// It should have a parameter to take in user data
// It should have methods to determine:
// Given a user’s ID, what is their user data?
// The average step goal amongst all users