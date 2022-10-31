import styled from 'styled-components';

export const Wrapper = styled.header`
  background: #f7f0eb;
  height: 65px;
  border-bottom: 1px solid #fdf3f3;
  position: fixed;
  width: 100%;
  z-index: 10000;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 20px;

  img {
    max-width: 80%;
    width: 200px;
    margin: 0;
    padding: 12px 0 0 0;
    
    @media screen and (min-width: 400px) {
      width: 200px;
    }
  }
`;
