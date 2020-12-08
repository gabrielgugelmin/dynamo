import React from 'react';
import colors from '~/utils/colors';
import { ButtonComponent, LoadingIcon } from './styles';

function Button({ children, isLoading, ...rest }) {
  return (
    <ButtonComponent {...rest}>
      {isLoading ? <LoadingIcon color={colors.white} /> : children}
    </ButtonComponent>
  );
}

export default Button;
