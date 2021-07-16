class HydrationRepository {
  constructor(waterInfo) {
    this.hydrationData = waterInfo;
  }

  averageWaterPerDay(id) {
    const userOzPerDay = this.hydrationData.filter(user => user.userID === id);
    // console.log(userOzPerDay);
    const totalAverage = userOzPerDay.reduce((total, user) => {
      return total + user.numOunces;
      }, 0)
    // console.log(totalAverage);
    return Math.round(totalAverage / userOzPerDay.length);
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
    
  };
};

export default HydrationRepository;
