const dayjs = require('dayjs');

class HydrationRepository {
  constructor(waterInfo) {
    this.hydrationData = waterInfo;
  }

  averageWaterPerDay(id) {
    const userOzPerDay = this.hydrationData.filter(user => user.userID === id);
    const totalOz = userOzPerDay.reduce((acc, user) => {
      return acc + user.numOunces;
      }, 0)
    return Math.round(totalOz / userOzPerDay.length);
  };

  fluidOzByDate(id, date) {
    const ozDrunkByUser = this.hydrationData.filter(user => user.userID === id)
    const ozDrunkOnDate = ozDrunkByUser.find(user => {
      return user.date === date;
    });
    return ozDrunkOnDate.numOunces;
  };


  ozDrankInWeek(id, date) {
    let weekDates = [date, null, null, null, null, null, null];
    for (let i=0; i<weekDates.length; i++) {
      weekDates[i] = dayjs(date).add([i], 'day').format('YYYY/MM/DD');
    };

    let weeklyResults = [];
    const dataForWeek = this.hydrationData.filter(user => user.userID === id).filter(user => {
      if (weekDates.includes(user.date)) {
        let waterPerDay = {
          [user.date]: user.numOunces
        }
        weeklyResults.push(waterPerDay);
        return user;
      };
    });
    return weeklyResults;
  };
};

export default HydrationRepository;
