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
    "userID": 3,
    "date": "2019/06/15",
    "numOunces": 47
  }];
      userInfo = userData[1];
      hydration = new Hydration(userInfo);
    });

    it('should be a function', () => {
      expect(Hydration).to.be.a('function');
    });

  });
