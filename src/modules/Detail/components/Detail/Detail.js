import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '~/components/Carousel';

import { H1, H2 } from '~/components/Title';
import Youtube from '~/components/Youtube/Youtube';
import Info from './components/Info';
import { Subtitle, Text, RocketInfo } from './styles';

function Detail({
  details,
  images,
  manufacturer,
  missionName,
  nationality,
  orbit,
  rocketName,
  rocketType,
  site,
  year,
  youtubeId,
}) {
  return (
    <>
      <H1 align="center" margin="0 0 18px 0">
        {missionName}
      </H1>
      <Subtitle align="center">{site}</Subtitle>
      <Carousel images={images} />
      <Text>{details}</Text>
      <H2 align="center" margin="42px 0">
        Rocket
      </H2>
      <RocketInfo>
        <Info title="Name" text={rocketName} />
        <Info title="Year" text={year} />
        <Info title="Type" text={rocketType} />
        <Info title="Nationality" text={nationality} />
        <Info title="Manufacturer" text={manufacturer} />
        <Info title="Orbit" text={orbit} />
      </RocketInfo>

      <Youtube videoId={youtubeId} />
    </>
  );
}

export default Detail;

Detail.propTypes = {
  details: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  manufacturer: PropTypes.string,
  missionName: PropTypes.string,
  nationality: PropTypes.string,
  orbit: PropTypes.string,
  rocketName: PropTypes.string,
  rocketType: PropTypes.string,
  site: PropTypes.string,
  year: PropTypes.string,
  youtubeId: PropTypes.string,
};

Detail.defaultProps = {
  details: '',
  images: [],
  manufacturer: '',
  missionName: '',
  nationality: '',
  orbit: '',
  rocketName: '',
  rocketType: '',
  site: '',
  year: '',
  youtubeId: '',
};
