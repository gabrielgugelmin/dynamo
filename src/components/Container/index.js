import styled from 'styled-components';

export default styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 16px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: column;
    max-width: 720px;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    max-width: 998px;
  }

  @media (min-width: 1280px) {
    flex-direction: column;
    max-width: 1200px;
  }
`;
