export default {
  /**
   * Method used to transform an incoming account
   *
   * @param {object} account The incoming account
   *
   * @returns {object} The transformed account
   */
  receive(account) {
    return {
      bio: account.bio,
      birthday: account.birthday,
      email: account.email,
      gender: account.gender,
      id: account.id,
      mobile: account.mobile,
      telephone: account.telephone,
    };
  },

  /**
   * Method used to transform an outgoing account
   *
   * @param {object} account The outgoing account
   *
   * @returns {object} The transformed account
   */
  send(account) {
    return {
      bio: account.bio,
      birthday: account.birthday,
      email: account.email,
      gender: account.gender,
      id: account.id,
      mobile: account.mobile,
      telephone: account.telephone,
    };
  },
};
