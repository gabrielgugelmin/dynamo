import React from 'react';
import PropTypes from 'prop-types';
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

Info.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

Info.defaultProps = {
  title: '',
  text: '',
};
