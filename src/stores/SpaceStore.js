import { observable, action } from 'mobx';
import SpaceService from '~/services/Space';
import { LAUNCHES_LIMIT, LAUNCHES_OFFSET } from '~/utils/constants';

class SpaceStore {
  @observable launches = [];

  @observable offset = LAUNCHES_OFFSET;

  @observable page = 1;

  @action
  getLastLaunches = async () => {
    const response = await SpaceService.getLastLaunches({
      limit: LAUNCHES_LIMIT,
      offset: this.offset,
    });

    this.launches = [...this.launches, ...response];

    return response;
  };

  @action
  setOffset = () => {
    this.offset = (this.page - 1) * LAUNCHES_LIMIT;
  };

  @action
  loadMore = async () => {
    this.page++;
    this.setOffset();
    await this.getLastLaunches();
  };
}

const store = new SpaceStore();
export default store;
