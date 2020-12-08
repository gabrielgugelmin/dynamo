import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper, Image, Content, Info, Title, Text } from './styles';
import { VIEW_MODE } from '~/utils/constants';

function Card({ id, name, year, site, image, onClick, viewMode }) {
  return (
    <CardWrapper onClick={() => onClick(id)} viewMode={viewMode}>
      {image && (
        <Image>
          <img src={image} alt="Rocket patch" />
        </Image>
      )}
      <Content>
        <Info>
          <Title>Mission name</Title>
          <Text>{name}</Text>
        </Info>
        <Info>
          <Title>Year</Title>
          <Text>{year}</Text>
        </Info>
        <Info>
          <Title>Site</Title>
          <Text>{site}</Text>
        </Info>
      </Content>
    </CardWrapper>
  );
}

export default Card;

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  year: PropTypes.string,
  site: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  viewMode: PropTypes.oneOf([VIEW_MODE.GRID, VIEW_MODE.LIST]),
};

Card.defaultProps = {
  id: '',
  name: '',
  year: '',
  site: '',
  image: '',
  viewMode: VIEW_MODE.GRID,
};
