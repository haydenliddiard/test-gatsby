import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  margin-top: 0;
  padding: 2em 20px 1em 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: none;
  background: #71726a;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    
  }
`;
