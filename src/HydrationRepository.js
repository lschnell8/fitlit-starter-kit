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
    // const userFluidDates = this.hydrationData.filter(user => user.userID === id).map(user => user.date);
    let weekDates = [date, null, null, null, null, null, null];
    for (let i=0; i<weekDates.length; i++) {
      weekDates[i] = dayjs(date).add([i], 'day').format('YYYY/MM/DD');
    };
    // console.log(weekDates);

    // const userFluidDates = this.hydrationData.filter(user => user.userID === id);
    const newVar = this.hydrationData.filter(user => user.userID === id).filter(user => {
      if (weekDates.includes(user.date)) {
        return user.numOunces;
      };
    });
    console.log('the new one', newVar);
    // console.log(endDate);
    // console.log(userFluidDates);
    // const weekHydration = userFluidDates.reduce((obj, hydration) => {
    //   if (o)
    // })
    // dayjs('2019-01-25').add(1, 'day').subtract(1, 'year').year(2009).toString()
  };
};

export default HydrationRepository;
