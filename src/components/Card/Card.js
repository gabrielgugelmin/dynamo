import React from 'react';
import { CardWrapper, Image, Content, Info, Title, Text } from './styles';

function Card({ name, year, site, image, onClick, viewMode }) {
  return (
    <CardWrapper onClick={onClick} viewMode={viewMode}>
      <Image>
        <img src={image} alt="Rocket patch" />
      </Image>
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