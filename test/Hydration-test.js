import { expect } from 'chai';
import Hydration from '../src/Hydration';

describe('Hydration', () => {
  let userData, hydration, userInfo;

  beforeEach(() => {
    userData = [
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
    "userID": 1,
    "date": "2019/06/18",
    "numOunces": 47
  }];

  userInfo = userData[1];
  hydration = new Hydration(userInfo);
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should indicate the user ID', () => {
    expect(hydration.id).to.equal(2);
  });

  it('should indicate the date of the hydration info', () => {
    expect(hydration.date).to.equal("2019/06/15");
  });

  it('should indicate the number of ounces drank', () => {
    expect(hydration.numOunces).to.equal(75);
  });
});
