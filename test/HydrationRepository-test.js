import { expect } from 'chai';
import HydrationRepository from '../src/HydrationRepository';

describe('HydrationRepository', () => {
  let hydrationData, waterData;

  beforeEach(() => {
    hydrationData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "numOunces": 37
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "numOunces": 75
  },
  {
    "userID": 3,
    "date": "2019/06/18",
    "numOunces": 47
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "numOunces": 69
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "numOunces": 91
  },
  {
    "userID": 2,
    "date": "2019/03/11",
    "numOunces": 76
  }];

  waterData = new HydrationRepository(hydrationData);
  });

  it('should be a function', () => {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be an instance of HydrationRepository', () => {
    expect(waterData).to.be.an.instanceof(HydrationRepository);
  });

  it('should be able to store hydration data', () => {
    expect(waterData.hydrationData).to.equal(hydrationData);
  });

  it('should be able to return user average hydration', () => {
    expect(waterData.averageWaterPerDay(2)).to.equal(81);
  });

  it('should be able to return ounces drank by specific date', () => {
    expect(waterData.fluidOzByDate(1, '2019/06/16')).to.equal(69);
  });

  it('should be able to return ounces drank each day over a week starting at specified date', () => {
    expect(waterData.ozDrankInWeek(2, '2019/06/15')).to.deep.equal({
      '2019/06/15': 75,
      '2019/06/16': 91
    });
  });

});
