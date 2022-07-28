const addUser =
  (User) =>
  ({ email, billingId, plan, endDate }) => {
    if (!email || !billingId || !plan) {
      throw new Error(
        "Missing data. Please provide values for email, billingId and plan."
      );
    }
    const user = new User({ email, billingId, plan, endDate });
    return User.save();
  };

const getUsers = (User) => () => {
  return User.find({});
};

const getUserByEmail = (User) => async (email) => {
  return await User.findOne({ email });
};

const getUserByBillingId = (User) => async (billingId) => {
  return await User.findOne({ billingId });
};

const updatePlan = (User) => (email, plan) => {
  return User.findOneAndUpdate({ email, plan });
};

module.exports = (User) => {
  return {
    addUser: addUser(User),
    getUsers: getUsers(User),
    getUserByEmail: getUserByEmail(User),
    updatePlan: updatePlan(User),
    getUserByBillingId: getUserByBillingId(User),
  };
};
