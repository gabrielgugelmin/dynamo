import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function Content({ children }) {
  return <Container>{children}</Container>;
}

export default Content;

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};
