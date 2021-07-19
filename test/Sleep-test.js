import { expect } from 'chai';
import Sleep from '../src/Sleep';

describe('Sleep', () => {
  let sleep, sleepData;

  beforeEach(() => {
    sleepData = [
        {
          "userID": 1,
          "date": "2019/06/15",
          "hoursSlept": 6.1,
          "sleepQuality": 2.2
        },
        {
          "userID": 2,
          "date": "2019/06/15",
          "hoursSlept": 7,
          "sleepQuality": 4.7
        },
        {
          "userID": 3,
          "date": "2019/06/15",
          "hoursSlept": 10.8,
          "sleepQuality": 4.7
        },
        {
          "userID": 4,
          "date": "2019/06/15",
          "hoursSlept": 5.4,
          "sleepQuality": 3
        },
        {
          "userID": 5,
          "date": "2019/06/15",
          "hoursSlept": 4.1,
          "sleepQuality": 3.6
        },
        {
          "userID": 6,
          "date": "2019/06/15",
          "hoursSlept": 9.6,
          "sleepQuality": 2.9
        },
        {
          "userID": 7,
          "date": "2019/06/15",
          "hoursSlept": 5.1,
          "sleepQuality": 2.6
        },
        {
          "userID": 8,
          "date": "2019/06/15",
          "hoursSlept": 8.1,
          "sleepQuality": 3.5
        },
        {
          "userID": 2,
          "date": "2019/06/16",
          "hoursSlept": 8.9,
          "sleepQuality": 2.2
        }
      ];
      // userSleepData = sleepData[1];
      sleep = new Sleep(sleepData);
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should give the average number of hours slept per day', () => {
    let sleepDay = sleep.calcHoursSleptPerDay(2)
    expect(sleepDay).to.equal(7.95);
  });
  
});


//For a user (identified by their userID), the average number of hours slept per day

// For a user, their average sleep quality per day over all time

// For a user, how many hours they slept for a specific day (identified by a date)

// For a user, their sleep quality for a specific day (identified by a date)

// For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week

// For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
