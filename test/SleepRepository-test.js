import { expect } from 'chai';
import SleepRepository from '../src/SleepRepository';

describe('SleepRepository', () => {
  let sleepRepo, sleepData;

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
      sleepRepo = new SleepRepository(sleepData);
  });

  it('should be a function', () => {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of SleepRepository', () => {
    expect(sleepRepo).to.be.an.instanceof(SleepRepository);
  });

  it('should give a user average sleep quality per day over all time', () => {
    let sleepQualityAll = sleepRepo.calcAverageSleepQuality(2)
    expect(sleepQualityAll).to.equal(3.45);
  });
  
  it('should give a user hours they slept for a specific date', () => {
    expect(sleepRepo.hoursSleptByDate(2, '2019/06/16')).to.equal(8.9);
  });

  it('should give a user their sleep quality for a specific date', () => {
    expect(sleepRepo.sleepQualityByDate(2, '2019/06/16')).to.equal(2.2);
  });

  it('should give a user hours slept each day over a given week', () => {
    expect(sleepRepo.sleepHoursInWeek(2, '2019/06/11')).to.deep.equal(
      [
        {'2019/06/15': 7},
        {'2019/06/16': 8.9}
      ]
    );
  });

  it('should give a user sleep quality each day over a given week', () => {
    expect(sleepRepo.sleepQualityInWeek(2, '2019/06/11')).to.deep.equal(
      [
        {'2019/06/15': 4.7},
        {'2019/06/16': 2.2}
      ]
    );
  });

});
