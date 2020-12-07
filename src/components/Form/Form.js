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

export const Button = styled.button`
  background-color: ${colors.congressBlue};
  border-radius: 4px;
  border: 0;
  color: ${colors.white};
  cursor: pointer;
  font-size: 18px;
  height: 64px;
  width: 100%;
  box-shadow: 4px 4px 16px 2px rgba(42, 35, 31, 0.24);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 0 0 rgba(42, 35, 31, 0);
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
