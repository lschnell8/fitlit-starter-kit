import { expect } from 'chai';
import UserRepository from '../src/UserRepository';

// const chai = require('chai');
// const expect = chai.expect;

describe('User Repository', () => {
  let userData, userRepository;

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
      userRepository = new UserRepository(userData);
    });

    it('should be a function', () => {
      expect(UserRepository).to.be.a('function');
    });

    it('should be an instance of UserRepository', () =>
    {
      expect(userRepository).to.be.an.instanceof(UserRepository);
    });  

    it('it should be able to return user data by ID', () => {
      expect(userRepository.findUserData(2)).to.deep.equal(userData[1]);
    });

    it('it should determine average step goal among all users', () => {
      expect(userRepository.calculateAverageStepGoal()).to.equal(6667);
    });
  });
  