import styled from 'styled-components';

export default styled.div`
  height: ${({ height }) => height || '50px'};
  width: ${({ width }) => width || '100px'};
  border-radius: ${({ radius }) => radius || '0'};
  margin: ${({ margin }) => margin || '0'};
  background: linear-gradient(
    270deg,
    #f1f5f7,
    #f1f5f7,
    #f1f5f7,
    #e7eff2,
    #f1f5f7,
    #f1f5f7,
    #f1f5f7
  );
  background-size: 400% 400%;

  -webkit-animation: AnimationName 1s ease-out-in-out infinite;
  -moz-animation: AnimationName 1s ease-out infinite;
  animation: AnimationName 1s ease-out infinite;

  @keyframes AnimationName {
    0% {
      background-position: 100% 0%;
    }
  }
`;
