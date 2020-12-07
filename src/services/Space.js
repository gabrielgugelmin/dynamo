import api from './api';

class SpaceService {
  constructor() {
    this.baseURL = 'launches/';
  }

  getLastLaunches = async ({ limit = 50, offset = 0 }) => {
    const { data } = await api.get(
      `${this.baseURL}past?limit=${limit}&offset=${offset}`,
    );

    return data;
  };
}

const service = new SpaceService();
export default service;
