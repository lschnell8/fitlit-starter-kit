class Sleep {
  constructor(userSleepData) {
    this.userSleepData = userSleepData;
    // console.log(this.userSleepData);
  }

  calcHoursSleptPerDay(id) {
    const sleptPerDay = this.userSleepData.filter(user => user.userID === id);
    const totalSlept = sleptPerDay.reduce((acc, user) => {return acc + user.hoursSlept;}, 0);
    // console.log(totalSlept);
    return (totalSlept / sleptPerDay.length)
  };
};

export default Sleep;