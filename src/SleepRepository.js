const dayjs = require('dayjs');

class SleepRepository {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }
  calcAverageSleepQuality(id) {
    const qualityPerDay = this.sleepData.filter(user => user.userID === id);
    const totalQuality = qualityPerDay.reduce((acc, user) => {return acc + user.sleepQuality;}, 0);
    return (totalQuality / qualityPerDay.length)
  };

  hoursSleptByDate(id, date) {
    const sleepByUser = this.sleepData.filter(user => user.userID === id)
    const sleptOnDate = sleepByUser.find(user => {
      return user.date === date;
    });
    return sleptOnDate.hoursSlept;
  };

  sleepQualityByDate(id, date) {
    const sleepQualityByUser = this.sleepData.filter(user => user.userID === id)
    const sleepQualityOnDate = sleepQualityByUser.find(user => {
      return user.date === date;
    });
    return sleepQualityOnDate.sleepQuality;
  };

  sleepHoursInWeek(id, date) {
    let weekDates = [date, null, null, null, null, null, null];
    for (let i=0; i<weekDates.length; i++) {
      weekDates[i] = dayjs(date).add([i], 'day').format('YYYY/MM/DD');
    };

    let weeklyResults = [];
    const dataForWeek = this.sleepData.filter(user => user.userID === id).filter(user => {
      if (weekDates.includes(user.date)) {
        let sleepPerDay = {
          [user.date]: user.hoursSlept
        }
        weeklyResults.push(sleepPerDay);
        return user;
      };
    });
    // console.log('the week data', dataForWeek);
    // console.log('the sleep objects', weeklyResults);
    return weeklyResults;
  };


  sleepQualityInWeek(id, date) {
    let weekDates = [date, null, null, null, null, null, null];
    for (let i=0; i<weekDates.length; i++) {
      weekDates[i] = dayjs(date).add([i], 'day').format('YYYY/MM/DD');
    };

    let weeklyResults = [];
    const dataForWeek = this.sleepData.filter(user => user.userID === id).filter(user => {
      if (weekDates.includes(user.date)) {
        let sleepQualityPerDay = {
          [user.date]: user.sleepQuality
        }
        weeklyResults.push(sleepQualityPerDay);
        return user;
      };
    });
    // console.log('the sleep quality objects', weeklyResults);
    return weeklyResults;
  };

}

export default SleepRepository;