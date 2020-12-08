import React from 'react';
import PropTypes from 'prop-types';
import colors from '~/utils/colors';
import { ButtonComponent, LoadingIcon } from './styles';

function Button({ children, isLoading, ...rest }) {
  return (
    <ButtonComponent {...rest} disabled={isLoading}>
      {isLoading ? <LoadingIcon color={colors.white} /> : children}
    </ButtonComponent>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  isLoading: false,
};
