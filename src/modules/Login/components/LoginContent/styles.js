import styled from 'styled-components';
import RocketImage from '~/assets/images/rocket';
import SignUpImage from '~/assets/images/signup';
import colors from '~/utils/colors';

export const Content = styled.div`
  display: flex;
  height: 100%;
`;

const Centered = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 50%;
  flex-direction: column;
`;

export const Left = styled(Centered)`
  background-color: ${colors.geyser};
`;

export const Right = styled(Centered)``;

export const Rocket = styled(RocketImage)`
  @keyframes float1 {
    from {
      transform: translate(289.132px, 470.037px) rotate(-92deg);
    }
    to {
      transform: translate(289.132px, 490.037px) rotate(-92deg);
    }
  }

  @keyframes float2 {
    from {
      transform: translate(18.546px, 494.566px) rotate(-120deg);
    }
    to {
      transform: translate(18.546px, 520.566px) rotate(-120deg);
    }
  }
  max-width: 90%;

  #cloud1 {
    animation: 4s linear 0s infinite alternate float1;
    transform: translate(289.132px, 470.037px) rotate(-92deg);
  }

  #cloud2 {
    animation: 5s linear 2s infinite alternate float2;
    transform: translate(18.546px, 494.566px) rotate(-120deg);
  }
`;

export const SignUp = styled(SignUpImage)`
  max-width: 90%;
`;
