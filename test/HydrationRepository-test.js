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
  }];

  waterData = new HydrationRepository(hydrationData);
  });

  it('should be a function', () => {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be an instance of HydrationRepository', () => {
    expect(waterData).to.be.an.instanceof(HydrationRepository);
  });




  // it('should indicate the user ID', () => {
  //   expect(hydration.id).to.equal(2);
  // });
  //
  // it('should indicate the date of the hydration info', () => {
  //   expect(hydration.date).to.equal("2019/06/15");
  // });
  //
  // it('should indicate the number of ounces drank', () => {
  //   expect(hydration.numOunces).to.equal(75);
  // });
});
