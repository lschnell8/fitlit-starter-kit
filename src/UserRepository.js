class UserRepository {
  constructor(userData) {
    this.users = userData;
  }

  findUserData(id) {
    // const user = this.users.find((id) => {return user});
    return this.users.find((data) => id === data.id);
  }

  calculateAverageStepGoal() {

  }

}

export default UserRepository;