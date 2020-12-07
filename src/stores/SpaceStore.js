import { observable, action } from 'mobx';
import SpaceService from '~/services/Space';

class SpaceStore {
  @observable launches = [];

  @action
  getLastLaunches = async () => {
    const response = await SpaceService.getLastLaunches();

    return response;
  };
}

const store = new SpaceStore();
export default store;
