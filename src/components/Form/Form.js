import styled from 'styled-components';
import colors from '~/utils/colors';
import fonts from '~/utils/fonts';

export const FormControl = styled.div`
  margin-bottom: 24px;
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid ${colors.dorado};
  border-radius: 0;
  padding: 8px 16px;
  width: 100%;

  &:focus {
    outline: 0;
    outline-color: ${colors.congressBlue};
    border-bottom: 2px solid ${colors.congressBlue};
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${colors.dorado};
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${colors.dorado};
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: ${colors.dorado};
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: ${colors.dorado};
  }
`;

export const Small = styled.small`
  display: block;
  font-size: 14px;
  font-weight: ${fonts.medium};
`;

export const LinkButton = styled.button`
  border: 0;
  color: ${colors.congressBlue};
  cursor: pointer;
  font-size: 14px;
  font-weight: ${fonts.medium};
  background: transparent;
`;

export const Footer = styled.footer`
  margin-top: 16px;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  font-weight: ${fonts.medium};
  margin: 24px 0;
  text-align: center;
`;

export const SuccessMessage = styled(ErrorMessage)`
  color: green;
`;
