const dayjs = require('dayjs');

class HydrationRepository {
  constructor(waterInfo) {
    this.hydrationData = waterInfo;
  }

  //function to get user by ID, instead of in each function as below.

  averageWaterPerDay(id) {
    const userOzPerDay = this.hydrationData.filter(user => user.userID === id);
    // console.log(userOzPerDay);
    const totalOz = userOzPerDay.reduce((acc, user) => {
      return acc + user.numOunces;
      }, 0)
    // console.log(totalOz);
    return Math.round(totalOz / userOzPerDay.length);
  };

  fluidOzByDate(id, date) {
    const ozDrunkByUser = this.hydrationData.filter(user => user.userID === id)
    // console.log(ozDrunkByUser);
    const ozDrunkOnDate = ozDrunkByUser.find(user => {
      return user.date === date;
    });
    // console.log(ozDrunkOnDate);
    return ozDrunkOnDate.numOunces;
  };

  ozDrankInWeek(id, date) {
    let weekDates = [date, null, null, null, null, null, null];
    for (let i=0; i<weekDates.length; i++) {
      weekDates[i] = dayjs(date).add([i], 'day').format('YYYY/MM/DD');
    };
    // console.log(weekDates);

    let newArray = [];
    const dataForWeek = this.hydrationData.filter(user => user.userID === id).filter(user => {
      if (weekDates.includes(user.date)) {
        let obj = {
          [user.date]: user.numOunces
        }
        newArray.push(obj);
        return user;
      };
    });
    // console.log('the week data', dataForWeek);
    return newArray;
  };
};

export default HydrationRepository;
