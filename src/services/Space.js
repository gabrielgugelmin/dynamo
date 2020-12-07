import api from './api';

class SpaceService {
  constructor() {
    this.baseURL = 'launches/';
  }

  getLastLaunches = async () => {
    debugger;
    const { data } = await api.get(`${this.baseURL}past`);

    return data;
  };
}

const service = new SpaceService();
export default service;
