import { observable, action } from 'mobx';
import SpaceService from '~/services/Space';
import { LAUNCHES_LIMIT, LAUNCHES_OFFSET } from '~/utils/constants';

class SpaceStore {
  @observable launch = {};

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
  getLaunch = async flightNumber => {
    const response = await SpaceService.getLaunch(flightNumber);
    this.launch = response;

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

  getFormatedLaunch = () => {
    if (this.launch) {
      const {
        mission_name: missionName,
        launch_site: launchSite,
        details,
        launch_year: year,
        rocket,
      } = this.launch;
      const images = this.launch?.links?.flickr_images;

      const {
        rocket_name: rocketName,
        rocket_type: rocketType,
        second_stage: secondStage,
      } = rocket;
      const nationality = secondStage?.payloads?.[0]?.nationality;
      const manufacturer = secondStage?.payloads?.[0]?.manufacturer;
      const orbit = secondStage?.payloads?.[0]?.orbit;

      const youtubeId = this.launch?.links?.youtube_id;

      const info = {
        details,
        images,
        manufacturer,
        missionName,
        nationality,
        orbit,
        rocketName,
        rocketType,
        site: launchSite?.site_name_long,
        year,
        youtubeId,
      };

      return info;
    }

    return {};
  };
}

const store = new SpaceStore();
export default store;
