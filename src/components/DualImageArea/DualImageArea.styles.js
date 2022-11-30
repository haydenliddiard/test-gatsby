import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    
  }
`;
