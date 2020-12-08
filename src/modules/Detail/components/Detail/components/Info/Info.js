import React from 'react';
import { InfoWrapper, Title, Text } from './styles';

function Info({ title, text }) {
  return (
    <InfoWrapper>
      <Title>{title || '-'}</Title>
      <Text>{text || '-'}</Text>
    </InfoWrapper>
  );
}

export default Info;
