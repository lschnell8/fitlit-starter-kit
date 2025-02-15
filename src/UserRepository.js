class UserRepository {
  constructor(userData) {
    this.users = userData;
  }

  findUserData(id) {
    return this.users.find((data) => id === data.id);
  }

  calculateAverageStepGoal() {

    const steps = this.users.reduce((accm, current) => {
      return accm += current.dailyStepGoal
    }, 0);
    return Math.round(steps / this.users.length);
  }
}

export default UserRepository;