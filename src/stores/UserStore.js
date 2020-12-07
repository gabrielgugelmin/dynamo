import { action, observable } from 'mobx';
import ERROR from '~/utils/errors';
import SUCCESS from '~/utils/success';

import usersMock from '~/mocks/users';

class UserStore {
  @observable
  users = usersMock;

  @observable
  user = {};

  @observable
  isAuthenticated = false;

  @action
  addNewUser = ({ username, password, confirmPassword }) => {
    if (!username || !password || !confirmPassword)
      return {
        errorMessage: ERROR.ALL_FIELDS,
      };

    const findUser = this.users.find(user => user.username === username);
    if (findUser)
      return {
        errorMessage: ERROR.SIGN_UP,
      };
    if (password !== confirmPassword)
      return {
        errorMessage: ERROR.PASSWORD_MATCH,
      };

    this.users.push({
      username,
      password,
      confirmPassword,
    });

    return {
      successMessage: SUCCESS.REGISTER,
      errorMessage: '',
    };
  };

  @action
  signIn = ({ username, password }) => {
    if (!username || !password) return false;
    const findUser = this.users.find(user => user.username === username);

    this.setIsAuthenticated(findUser?.password === password || false);

    if (findUser) this.setUser(findUser);

    return {
      isAuthenticated: this.getIsAuthenticated(),
      errorMessage: ERROR.SIGN_IN,
    };
  };

  getIsAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (user?.username && user?.password) || false;
  };

  setIsAuthenticated = isAuthenticated => {
    this.isAuthenticated = isAuthenticated;
  };

  @action
  setUser = user => {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  };

  getUserInitial = () => {
    if (!this.user?.username) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    return this.user?.username?.substring(0, 1);
  };
}

const store = new UserStore();
export default store;
